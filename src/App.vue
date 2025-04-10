<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import defaultData from '@/assets/data.json';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyA2RLK6hoiaJ7pdlNOXOnD_BwS62ABqC50',
  authDomain: 'fenchayuzhou.firebaseapp.com',
  projectId: 'fenchayuzhou'
});

const db = getFirestore(firebaseApp);
const listRef = doc(db, 'fenchayuzhou', 'strategy');

if (!localStorage.getItem('list'))
  localStorage.setItem('list', JSON.stringify([defaultData]));
const list = reactive(JSON.parse(localStorage.getItem('list')));
const url = 'https://hoyolabapi.vercel.app/api/fenchayuzhou?id=';

// setDoc(listRef, {})
//   .then(d => {
//     console.log(d)
//   })
const base_type = {
  '1': '毁灭',
  '2': '巡猎',
  '3': '智识',
  '4': '同谐',
  '5': '虚无',
  '6': '存护',
  '7': '丰饶',
  '8': '记忆',
};

const button_list = [
  { name: 'formula', text: '推荐方程' },
  { name: 'avatar', text: '推荐队伍' },
  { name: 'miracle', text: '推荐加权奇物' },
];
const show = ref(button_list[0].name);

function editColorString(text) {
  return text.replaceAll(
    /<color=#([0-9a-fA-F]{6,8})>(.*?)<\/color>/g,
    `<span style="color: #$1;">$2</span>`
  );
}

async function onEnterUp(e) {
  if (e.keyCode == 13 && e.target.value !== '') {
    if (list.findIndex(d => d.id == e.target.value) == -1) {
      const response = await fetch(url + e.target.value)
      const data = await response.json()
      e.target.value = ''
      list.push(data)
      localStorage.setItem('list', JSON.stringify(list))
    } else {
      alert(`ID: ${e.target.value} 已存在`)
      e.target.value = ''
    }
  }
}

const index = ref(0);
const id = computed(() => index.value !== null ? list[index.value].id : null);
const lineup = computed(() => index.value !== null ? list[index.value] : null);
const info = computed(() => lineup.value !== null ? lineup.value.lineup_rogue_tourn_info : null);

const title = computed(() => lineup.value !== null ? lineup.value.title : null);
const description = computed(() => lineup.value !== null ? lineup.value.description : null);

const formula_list_main = computed(() => info.value !== null ? info.value.formula_list : []);
const formula_list_sub = computed(() => info.value !== null ? info.value.second_formula_list : []);

const miracle_list_main = computed(() => info.value !== null ? info.value.miracle_list : []);
const miracle_list_sub = computed(() => info.value !== null ? info.value.second_miracle_list : []);

const avatar_list = computed(() => info.value !== null ? info.value.group_list[0].avatar_list : []);

const buff_req = computed(() => {
  let buffs = {}
  for (const formula of [...formula_list_main.value, ...formula_list_sub.value]) {
    const {
      main_buff_type_id, main_buff_num, main_buff_small_icon,
      sub_buff_type_id, sub_buff_num, sub_buff_small_icon
    } = formula;
    if (typeof buffs[main_buff_type_id] == 'undefined' || buffs[main_buff_type_id].num < main_buff_num)
      buffs[main_buff_type_id] = { num: main_buff_num, icon: main_buff_small_icon };
    if (typeof buffs[sub_buff_type_id] == 'undefined' || buffs[sub_buff_type_id] < sub_buff_num)
      buffs[sub_buff_type_id] = { num: sub_buff_num, icon: sub_buff_small_icon };
  }
  return buffs;
});
const loaded_formula = ref(null);
const loaded_miracle = ref(null);
watch(id, () => {
  loaded_formula.value = formula_list_main.value[0];
  loaded_miracle.value = miracle_list_main.value[0];
});
onMounted(async () => {
  loaded_formula.value = formula_list_main.value[0];
  loaded_miracle.value = miracle_list_main.value[0];

  const listData = (await getDoc(listRef)).data().list;
  for (const ld of listData) {
    if (list.findIndex(d => d.id == ld.id) == -1) {
      list.push(ld);
      localStorage.setItem('list', JSON.stringify(list));
    }
  }
});
</script>

<template>
  <div class="container-fluid overflow-hidden">
    <div class="row">
      <div class="col-4 list">
        <input class="form-control mb-2" type="text" placeholder="Input ID to get new Strategy Guide"
          @keyup="onEnterUp($event)">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item" :class="{ active: index == i }" v-for="[i, data] in Object.entries(list)"
            @click="index = i">
            <span class="gold">{{ data.title }}</span>
          </li>
        </ol>
      </div>
      <div class="col-8 detail" v-if="id !== null">
        <div class="card">
          <div class="card-header">
            <div class="card-text">
              <small><small>ID: {{ id }}</small></small>
            </div>
            <div class="card-title gold">
              <span class="fs-3">{{ title }}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-text">
              {{ description }}
            </div>
          </div>
          <div class="card-footer">
            <div class="row justify-content-center">
              <div class="col-auto my-auto gold"><span class="fs-4">全方程需求</span></div>
              <div class="col-auto" v-for="buff in buff_req">
                <img :src="buff.icon" width="30">
                <div class="text-center">{{ buff.num }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" :class="{ active: show == button.name }"
                v-for="button in button_list" @click="show = button.name">
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
        <div class="formula-box mt-4" v-show="show == 'formula'">
          <div class="alert alert-info" v-if="info.formula_description">
            {{ info.formula_description }}
          </div>
          <h4 class="gold text-center">核心方程</h4>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button class="btn btn-outline-secondary" :class="{ active: loaded_formula == formula }"
              v-for="formula in formula_list_main" @click="loaded_formula = formula">
              <span class="gold">{{ formula.name }}</span>
            </button>
          </div>
          <h4 class="gold mt-2 text-center">辅助方程</h4>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button class="btn btn-outline-secondary" :class="{ active: loaded_formula == formula }"
              v-for="formula in formula_list_sub" @click="loaded_formula = formula">
              <span class="gold">{{ formula.name }}</span>
            </button>
          </div>
          <div class="mt-2" v-if="loaded_formula">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-auto mt-auto">
                    <h3 class="card-title gold">{{ loaded_formula.name }}</h3>
                  </div>
                  <div class="col-auto">
                    <img :src="loaded_formula.main_buff_small_icon" width="30">
                    <div class="text-center">{{ loaded_formula.main_buff_num }}</div>
                  </div>
                  <div class="col-auto">
                    <img :src="loaded_formula.sub_buff_small_icon" width="30">
                    <div class="text-center">{{ loaded_formula.sub_buff_num }}</div>
                  </div>
                </div>
                <p class="card-text" v-html="editColorString(loaded_formula.desc)"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4" v-show="show == 'avatar'">
          <div class="col-auto">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item" v-for="avatar in avatar_list">
                <div class="position-relative">
                  <img :src="avatar.icon_url" width="80">
                  <div class="base-type">{{ base_type[avatar.avatar_base_type] }}</div>
                </div>
                <div class="row" v-if="avatar.second_avatars.length > 0">
                  <div class="col-auto mt-2">
                    <template v-for="sub_avatar in avatar.second_avatars">
                      <div class="sub_avatar" v-if="sub_avatar.item_name">
                        <img :src="sub_avatar.icon_url">
                      </div>
                    </template>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-4" v-show="show == 'miracle'" v-if="loaded_miracle">
          <h4 class="gold text-center">核心加权奇物</h4>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button class="btn btn-outline-secondary" :class="{ active: loaded_miracle == miracle }"
              v-for="miracle in miracle_list_main" @click="loaded_miracle = miracle">
              <img :src="miracle.icon" height="40px">
              <span class="gold px-3">{{ miracle.name }}</span>
              <img :src="miracle.icon" height="40px">
            </button>
          </div>
          <h4 class="gold mt-2 text-center">辅助加权奇物</h4>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button class="btn btn-outline-secondary" :class="{ active: loaded_miracle == miracle }"
              v-for="miracle in miracle_list_sub" @click="loaded_miracle = miracle">
              <img :src="miracle.icon" height="40px">
              <span class="gold px-3">{{ miracle.name }}</span>
              <img :src="miracle.icon" height="40px">
            </button>
          </div>
          <div class="mt-2">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title gold">
                  {{ loaded_miracle.name }}
                  <img class="ms-3" :src="loaded_miracle.icon" height="40px">
                </h3>
                <p class="card-text" v-html="editColorString(loaded_miracle.desc)"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gold {
  color: #ffcb87;
}

.base-type {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000cc;
  text-align: center;
  font-size: .7em;
}

.sub_avatar {
  border-radius: 100%;
  overflow: hidden;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  padding: 0;
  background: linear-gradient(#3f4064 0%, #9c65d7 100%);

  img {
    width: 100%;
  }
}

img {
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.list,
.detail {
  position: relative;
  padding: 16px;
  height: 100vh;
  overflow-y: auto;

  &::before,
  &::after {
    content: '';
    position: fixed;
    left: 0;
    right: 15px;
    height: 16px;
    background-color: var(--bs-body-bg);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

.formula-box {

  .formula-choose-box {
    border: var(--bs-border-color-translucent) var(--bs-border-width) solid;
    --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
    padding-top: 5px;
    padding-bottom: 5px;

    &.active {
      z-index: 2;
      color: var(--bs-list-group-active-color);
      background-color: var(--bs-list-group-active-bg);
      border-color: var(--bs-list-group-active-border-color);
    }

    &.col-6 {
      &:first-child {
        border-radius: var(--bs-card-inner-border-radius) 0 0 0;
      }

      &:nth-child(2) {
        border-radius: 0 var(--bs-card-inner-border-radius) 0 0;
      }

      &:nth-last-child(1) {
        border-radius: 0 0 var(--bs-card-inner-border-radius) 0;
      }

      &:nth-last-child(2) {
        border-radius: 0 0 0 var(--bs-card-inner-border-radius);
      }

      &:nth-child(odd) {
        border-right: none;
      }

      &:nth-child(n+3) {
        border-top: none;
      }
    }

    &.col-4 {
      &:first-child {
        border-radius: var(--bs-card-inner-border-radius) 0 0 0;
      }

      &:nth-child(3) {
        border-radius: 0 var(--bs-card-inner-border-radius) 0 0;
      }

      &:nth-last-child(1) {
        border-radius: 0 0 var(--bs-card-inner-border-radius) 0;
      }

      &:nth-last-child(3) {
        border-radius: 0 0 0 var(--bs-card-inner-border-radius);
      }

      &:not(:nth-child(3n)) {
        border-right: none;
      }

      &:nth-child(n+4) {
        border-top: none;
      }
    }
  }
}
</style>

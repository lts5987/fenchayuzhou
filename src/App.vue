<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyA2RLK6hoiaJ7pdlNOXOnD_BwS62ABqC50',
  authDomain: 'fenchayuzhou.firebaseapp.com',
  projectId: 'fenchayuzhou'
});

const db = getFirestore(firebaseApp);
const listRef = doc(db, 'fenchayuzhou', 'strategy');

const list = reactive([]);
const url = 'https://hoyolabapi.vercel.app/api/fenchayuzhou?id=';

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

const iconList = [
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/a33c526b158e79fb3fdb423d72fc9cae.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/a1f70c6bb9713f81435821506865b4db.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/3e9c8d9a74d5928012016f2bba0440e8.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/d4ad4c5c30ec8b64cacb760563778bef.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/15438b57925d433fdbe50a415567c156.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/5059e2fb3d8b36ced88a00b84e58792c.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/f70c86f524c7a5c6b930da71297844a6.png",
  "https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/0bf8ad0e2732b28b3ce967e775eb23e7.png",
];

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

function preloadImages(urls) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

async function onEnterUp(e) {
  if (e.keyCode == 13 && e.target.value !== '') {
    if (list.findIndex(d => d.id == e.target.value) == -1) {
      const response = await fetch(url + e.target.value)
      const data = await response.json()
      e.target.value = ''
      list.push(data)
      setDoc(listRef, { list })
        .then(d => {
          console.log(d)
        })
    } else {
      alert(`ID: ${e.target.value} 已存在`)
      e.target.value = ''
    }
  }
}

function getBuffReq(info) {
  let buffs = {};
  if (info) {
    for (const formula of [...info.formula_list, ...info.second_formula_list]) {
      const {
        main_buff_type_id, main_buff_num, main_buff_small_icon,
        sub_buff_type_id, sub_buff_num, sub_buff_small_icon
      } = formula;
      if (typeof buffs[main_buff_type_id] == 'undefined' || buffs[main_buff_type_id].num < main_buff_num)
        buffs[main_buff_type_id] = { num: main_buff_num, icon: main_buff_small_icon };
      if (typeof buffs[sub_buff_type_id] == 'undefined' || buffs[sub_buff_type_id] < sub_buff_num)
        buffs[sub_buff_type_id] = { num: sub_buff_num, icon: sub_buff_small_icon };
    }
  }
  return buffs;
}

const index = ref(null);

const loaded_formula = reactive([]);
const loaded_miracle = reactive([]);

watch(index, () => {
  if (list[index]) {
    loaded_formula[index] = list[index].lineup_rogue_tourn_info.formula_list[0].name;
    loaded_miracle[index] = list[index].lineup_rogue_tourn_info.miracle_list[0].name;
    show.value = button_list[0].name;
  }
});

onMounted(async () => {
  preloadImages(iconList);

  const listData = (await getDoc(listRef)).data().list;
  for (const ld of listData) {
    if (list.findIndex(d => d.id == ld.id) == -1) {
      list.push(ld);
      loaded_formula.push(ld.lineup_rogue_tourn_info.formula_list[0].name);
      loaded_miracle.push(ld.lineup_rogue_tourn_info.miracle_list[0].name);
    }
  }
  if (list.length > 0)
    index.value = 0;
});
</script>

<template>
  <div class="container-fluid overflow-hidden">
    <div class="row">
      <div class="col-4 list">
        <input class="form-control mb-2" type="text" placeholder="输入ID来获取攻略" @keyup="onEnterUp($event)">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item" :class="{ active: index == i }" v-for="[i, data] in Object.entries(list)"
            @click="index = i">
            <span class="gold">{{ data.title }}</span>
          </li>
        </ol>
      </div>
      <template v-for="[i, { id, title, description, lineup_rogue_tourn_info: info }] in Object.entries(list)">
        <div class="col-8 detail" v-show="index == i">
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
                <div class="col-auto" v-for="buff in getBuffReq(info)">
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
            <div class="alert alert-info" v-if="info?.formula_description">
              {{ info.formula_description }}
            </div>
            <h4 class="gold text-center">核心方程</h4>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button class="btn btn-outline-secondary" :class="{ active: loaded_formula[i] == formula.name }"
                v-for="formula in info.formula_list" @click="loaded_formula[i] = formula.name">
                <span class="gold">{{ formula.name }}</span>
              </button>
            </div>
            <h4 class="gold mt-2 text-center" v-show="info.second_formula_list.length > 0">辅助方程</h4>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button class="btn btn-outline-secondary" :class="{ active: loaded_formula[i] == formula.name }"
                v-for="formula in info.second_formula_list" @click="loaded_formula[i] = formula.name">
                <span class="gold">{{ formula.name }}</span>
              </button>
            </div>
            <template v-for="formula in [...info.formula_list, ...info.second_formula_list]">
              <div class="mt-2" v-show="formula.name == loaded_formula[i]">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-auto mt-auto">
                        <h3 class="card-title gold">{{ formula.name }}</h3>
                      </div>
                      <div class="col-auto">
                        <img :src="formula.main_buff_small_icon" width="30">
                        <div class="text-center">{{ formula.main_buff_num }}</div>
                      </div>
                      <div class="col-auto">
                        <img :src="formula.sub_buff_small_icon" width="30">
                        <div class="text-center">{{ formula.sub_buff_num }}</div>
                      </div>
                    </div>
                    <p class="card-text" v-html="editColorString(formula.desc)"></p>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="row justify-content-center mt-4" v-show="show == 'avatar'">
            <div class="col-auto">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item" v-for="avatar in info.group_list[0].avatar_list">
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
          <div class="row mt-4" v-show="show == 'miracle'">
            <h4 class="gold text-center">核心加权奇物</h4>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button class="btn btn-outline-secondary" :class="{ active: loaded_miracle[i] == miracle.name }"
                v-for="miracle in info.miracle_list" @click="loaded_miracle[i] = miracle.name">
                <img :src="miracle.icon" height="40px">
                <span class="gold px-3">{{ miracle.name }}</span>
                <img :src="miracle.icon" height="40px">
              </button>
            </div>
            <h4 class="gold mt-2 text-center" v-show="info.second_miracle_list.length > 0">辅助加权奇物</h4>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button class="btn btn-outline-secondary" :class="{ active: loaded_miracle[i] == miracle.name }"
                v-for="miracle in info.second_miracle_list" @click="loaded_miracle[i] = miracle.name">
                <img :src="miracle.icon" height="40px">
                <span class="gold px-3">{{ miracle.name }}</span>
                <img :src="miracle.icon" height="40px">
              </button>
            </div>
            <template v-for="miracle in [...info.miracle_list, ...info.second_miracle_list]">
              <div class="mt-2" v-show="miracle.name == loaded_miracle[i]">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title gold">
                      {{ miracle.name }}
                      <img class="ms-3" :src="miracle.icon" height="40px">
                    </h3>
                    <p class="card-text" v-html="editColorString(miracle.desc)"></p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
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

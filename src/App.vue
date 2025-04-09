<script setup>
import { ref, reactive, computed } from "vue";
const list = reactive(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : {});
const url = 'https://sg-public-api.hoyolab.com/event/rpgsimulator/game/lineup/detail?game=hkrpg&id=67e536042fadd0e25a9c72b0';

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

const id = ref(null);


const lineup = computed(() => id.value !== null ? list[id.value].lineup : null);
const info = computed(() => lineup.value !== null ? lineup.value.lineup_rogue_tourn_info : null);

const title = computed(() => lineup.value !== null ? lineup.value.title : null);
const description = computed(() => lineup.value !== null ? lineup.value.description : null);

const formula_list_main = ref(info.formula_list);
const formula_list_sub = ref(info.second_formula_list);

const miracle_list_main = ref(info.miracle_list);
const miracle_list_sub = ref(info.second_miracle_list);

const avatar_list = ref(info.group_list[0].avatar_list);

const buff_req = reactive({});
for (const formula of [...formula_list_main.value, ...formula_list_sub.value]) {
  const {
    main_buff_type_id, main_buff_num, main_buff_small_icon,
    sub_buff_type_id, sub_buff_num, sub_buff_small_icon
  } = formula;
  if (typeof buff_req[main_buff_type_id] == 'undefined' || buff_req[main_buff_type_id].num < main_buff_num)
    buff_req[main_buff_type_id] = { num: main_buff_num, icon: main_buff_small_icon };
  if (typeof buff_req[sub_buff_type_id] == 'undefined' || buff_req[sub_buff_type_id] < sub_buff_num)
    buff_req[sub_buff_type_id] = { num: sub_buff_num, icon: sub_buff_small_icon };
}
const loaded_formula = ref(formula_list_main.value[0]);
const loaded_miracle = ref(miracle_list_main.value[0]);

</script>

<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-4">
        <input class="form-control mb-2" type="text">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item" v-for="[id, data] in Object.entries(list)">
            <span class="gold">{{ data.title }}</span>
          </li>
        </ol>
      </div>
      <div class="col-8">
        <div class="card">
          <div class="card-header">
            <div class="card-text">
              <small>ID: {{ id }}</small>
            </div>
            <div class="card-title gold">
              {{ title }}
            </div>
          </div>
          <div class="card-body">
            <div class="card-text">
              {{ description }}
            </div>
          </div>
          <div class="card-footer">
            <div class="card-text text-center mb-3">
              <big>全方程需求</big>
            </div>
            <div class="row justify-content-center">
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
              <button type="button" class="btn btn-primary" :class="{ active: show == button.name }"
                v-for="button in button_list" @click="show = button.name">
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
        <div class="row mt-4" v-show="show == 'formula'">
          <div class="col-4">
            <h3>核心方程</h3>
            <ul class="list-group">
              <li class="list-group-item gold" :class="{ active: loaded_formula == formula }"
                v-for="formula in formula_list_main" @click="loaded_formula = formula">
                {{ formula.name }}
              </li>
            </ul>
            <h3 class="mt-4">辅助方程</h3>
            <ul class="list-group">
              <li class="list-group-item gold" :class="{ active: loaded_formula == formula }"
                v-for="formula in formula_list_sub" @click="loaded_formula = formula">
                {{ formula.name }}
              </li>
            </ul>
          </div>
          <div class="col-8">
            <div class="card h-100">
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
        <div class="row mt-4" v-show="show == 'miracle'">
          <div class="col-4">
            <h3>核心方程</h3>
            <ul class="list-group">
              <li class="list-group-item gold" :class="{ active: loaded_miracle == miracle }"
                v-for="miracle in miracle_list_main" @click="loaded_miracle = miracle">
                {{ miracle.name }}
              </li>
            </ul>
            <h3 class="mt-4">辅助方程</h3>
            <ul class="list-group">
              <li class="list-group-item gold" :class="{ active: loaded_miracle == miracle }"
                v-for="miracle in miracle_list_sub" @click="loaded_miracle = miracle">
                {{ miracle.name }}
              </li>
            </ul>
          </div>
          <div class="col-8">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title gold">{{ loaded_miracle.name }}</h3>
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
</style>

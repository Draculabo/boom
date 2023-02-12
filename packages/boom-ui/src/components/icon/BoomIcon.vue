<template>
    <div>
        <p class="titlep">所有图标</p>
        <div class="iconListBox">
            <ul class="icon-list">
                <li v-for="(item, index) in iconData" :key="index">
                    <i class="iconfont" :class="'icon-' + item.name"></i>
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import iconList from '@/iconfont/iconfont.json';

const keywords = ref('')
const iconData = ref(iconList.glyphs)
console.table(iconData);
const search = (event: any) => {
    iconData.value = []
    iconList.glyphs.filter((item: any) => {
        if (item.name.indexOf(event) != -1) {
            iconData.value.push(item)
        }
    })
}

</script>

<style lang="scss" scoped>
.icon-list {
    li {
        list-style: none;
        width: 16.66%;
        height: 120px;
        float: left;
        padding: 1vw;
        border-radius: 4px;
        box-sizing: border-box;
        text-align: center;
        font-size: 13px;
        transition: all .15s ease;
        cursor: pointer;

        i {
            font-size: 36px;
            color: #555;
            display: block;
            margin-top: 1vh;
        }

        span {
            display: inline-block;
            color: #555;
            margin-top: 1vh;
            margin-bottom: 1vh;
        }

        &:hover {

            i,
            span {
                color: #77D1aD;
            }
        }
    }
}
</style>

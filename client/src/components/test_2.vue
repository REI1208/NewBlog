<template>
    <div>
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive />
    </div>
</template>

<script setup>
import { NMenu } from 'naive-ui'

const menuOptions = [
    {
        label: () => (
            "且听风吟"
        ),
        key: "hear-the-wind-sing",
    },
    {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        disabled: true,
        children: [
            {
                label: "鼠",
                key: "rat"
            }
        ]
    },
    {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        children: [
            {
                type: "group",
                label: "人物",
                key: "people",
                children: [
                    {
                        label: "叙事者",
                        key: "narrator",
                    },
                    {
                        label: "羊男",
                        key: "sheep-man",
                    }
                ]
            },
            {
                label: "饮品",
                key: "beverage",
                children: [
                    {
                        label: "威士忌",
                        key: "whisky"
                    }
                ]
            },
            {
                label: "食物",
                key: "food",
                children: [
                    {
                        label: "三明治",
                        key: "sandwich"
                    }
                ]
            },
            {
                label: "过去增多，未来减少",
                key: "the-past-increases-the-future-recedes"
            }
        ]
    }
];
</script>

<style lang="scss" scoped></style>
<template>
    <div class="">
        <div class="grid grid-cols-3">
            <div></div>
            <div>
                <ul class="w-full max-w-md">
                    <li v-for="user in users" :key="user.id"
                        class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">
                        {{ user.name }}
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup>

const users = useState(() => [
    {
        id: 1,
        name: 'Partha',
        avatar: 'https://avatars.githubusercontent.com/u/42791257'
    },
    {
        id: 2,
        name: 'Asif',
        avatar: 'https://avatars.githubusercontent.com/u/42791257'
    },
    {
        id: 3,
        name: 'Tokla',
        avatar: 'https://avatars.githubusercontent.com/u/42791257'
    }
])

</script>

<style lang="scss" scoped></style>
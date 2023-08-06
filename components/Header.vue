<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 px-5 backdrop-blur">
    <!-- Container of flex -->
    <div class="flex h-16 items-center justify-between">
      <!-- Logo and page title -->
      <div class="flex items-center gap-3">
        <!-- Logo -->
        <img
          src="https://img.logoipsum.com/296.svg"
          alt="Analytics logo"
          class="h-7 w-7 object-contain"
        />
        <!-- Page title -->
        <NuxtLink class="text-xl font-bold" to="/">BitDev</NuxtLink>
      </div>
      <p>{{ $t("welcome") }}</p>
      <!-- Right side of header -->
      <div class="flex items-center gap-5">
        <!-- <select v-model="locale">
          <option value="en">en</option>
          <option value="vi">vi</option>
        </select> -->
        <HMenu as="div" class="relative">
          <HMenuButton
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
          >
            <Icon name="heroicons:language" class="h-5 w-5" />
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <HMenuItem v-slot="{ active }">
                <button
                  :class="[active && 'bg-muted']"
                  class="inline-flex w-full items-center gap-4 rounded-md p-2 text-sm font-medium capitalize"
                >
                  <img
                    src="https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam-qu9u-bt_c5f68d00deb342b6a14586945d4f02e4_master.jpg"
                    alt="Logged in user"
                    class="h-5 w-8"
                  />
                  <p>Việt Nam</p>
                </button>
              </HMenuItem>
              <HMenuItem v-slot="{ active }">
                <button
                  :class="[active && 'bg-muted']"
                  class="inline-flex w-full items-center gap-4 rounded-md p-2 text-sm font-medium capitalize"
                >
                  <img
                    src="https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg"
                    alt="Logged in user"
                    class="h-5 w-8"
                  />
                  <p>Tiếng Anh</p>
                </button>
              </HMenuItem>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
        <button
          @click="toggleTheme"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
        >
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>

        <!-- Profile Dropdown menu -->
        <HMenu as="div" class="relative">
          <HMenuButton
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
          >
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              alt="Logged in user"
              class="h-full w-full"
            />
          </HMenuButton>
          <TransitionScale :scale="0.8" origin="top right">
            <HMenuItems
              class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div class="border-b px-3 py-1.5 text-sm">
                <p class="font-semibold">Xin chào Hiếu Nguyễn</p>
                <a href="mailto:oh2k1vn@gmail.com" class="leading-none text-muted-foreground"
                  >oh2k1vn@gmail.com</a
                >
              </div>
              <div class="p-1">
                <template v-for="(p, i) in profileMenuOptions" :key="i">
                  <HMenuItem v-if="!p.divider" v-slot="{ active }">
                    <button
                      :class="[active && 'bg-muted']"
                      class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium"
                    >
                      {{ p.title }}
                    </button>
                  </HMenuItem>
                  <hr v-if="p.divider" class="my-1" />
                </template>
              </div>
            </HMenuItems>
          </TransitionScale>
        </HMenu>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  const { locale } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
  const mode = useColorMode();
  const toggleTheme = () => {
    mode.value = mode.value === "dark" ? "light" : "dark";
  };

  const local = computed(() => {
    return locale.value;
  });

  // Items that will be displayed in menu
  const profileMenuOptions = [
    { title: "Hồ sơ" },
    { title: "Cài đặt" },
    { title: "Thành viên nhóm" },
    { divider: true },
    { title: "Đăng xuất" },
  ];
</script>

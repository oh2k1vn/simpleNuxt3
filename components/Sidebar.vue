<template>
  <aside class="sticky top-[65px] h-[calc(100vh-65px)] border-r">
    <div
      class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="menu" />

      <div class="mt-auto">
        <SidebarItem :links="bottomMenu" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  const bottomMenu = [
    {
      title: "Cài đặt",
      icon: "heroicons:cog-8-tooth",
    },
    {
      title: "Hỗ trợ",
      icon: "heroicons:question-mark-circle",
    },
    {
      title: "Đăng xuất",
      icon: "heroicons:arrow-left-on-rectangle",
    },
  ];
  const menu = [
    {
      title: "Bảng điều khiển",
      icon: "heroicons:home",
    },
    {
      title: "khách hàng",
      icon: "heroicons:user-group",
      items: [
        { title: "Danh sách" },
        { title: "Tạo" },
        { title: "Chỉnh sửa" },
        { title: "Xoá" },
        { title: "Chi tiêt" },
      ],
    },
    {
      title: "Đơn hàng",
      icon: "heroicons:shopping-cart",
      items: [
        { title: "Danh sách" },
        { title: "Tạo" },
        { title: "Chỉnh sửa" },
        { title: "Xoá" },
        { title: "Chi tiêt" },
      ],
    },
    {
      title: "Sản phẩm",
      icon: "heroicons:cube",
      items: [
        { title: "Danh sách" },
        { title: "Tạo" },
        { title: "Chỉnh sửa" },
        { title: "Xoá" },
        { title: "Chi tiêt" },
      ],
    },
    {
      title: "Nhân viên",
      icon: "heroicons:user",
      items: [
        { title: "Danh sách" },
        { title: "Tạo" },
        { title: "Chỉnh sửa" },
        { title: "Xoá" },
        { title: "Chi tiêt" },
      ],
    },
    {
      title: "BitDev",
      icon: "heroicons:chart-pie",
      items: [{ title: "Tổng quan" }, { title: "Số liệu thống kê" }, { title: "Xu hướng" }],
    },
  ];
</script>

<template>
  <div>
    <!-- Header -->
    <Header />
    <div class="grid grid-cols-12">
      <!-- Sidebar -->
      <Sidebar class="col-span-2 block" />

      <!-- Main Section -->
      <main class="col-span-10 p-5">
        <!-- Status Cards -->
        <StatusCard />
        <!-- New customer list -->
        <NewCustomers />
        <!-- Charts -->
        <SalesChart />
        <!-- Recent orders -->
        <RecentOrders />
      </main>
    </div>
  </div>
</template>

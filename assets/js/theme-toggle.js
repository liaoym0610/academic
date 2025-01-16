document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle-btn"); // 更新按鈕 ID
  const rootElement = document.documentElement; // 使用根元素進行主題切換
  const currentTheme = localStorage.getItem("theme") || "light"; // 默認主題為 light

  // 初始化主題
  rootElement.setAttribute("data-theme", currentTheme);

  // 如果是暗色模式，添加 dark-mode 樣式
  if (currentTheme === "dark") {
    rootElement.classList.add("dark-mode");
  }

  // 點擊按鈕切換主題
  toggleButton.addEventListener("click", function () {
    const isDarkMode = rootElement.classList.toggle("dark-mode");
    const newTheme = isDarkMode ? "dark" : "light";

    // 更新主題屬性和本地存儲
    rootElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

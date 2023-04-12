const gradientBox = document.querySelector(".gradient-box"),
selectMenu = document.querySelector(".select-box select"),
colorInputs = document.querySelectorAll(".colors input"),
textarea = document.querySelector("textarea"),
refreshBtn = document.querySelector(".refresh"),
copyBtn = document.querySelector(".copy")

const getRandomColor = () => {
   const randomHex = Math.floor(Math.random() * 0Xffffff).toString(16)
   return `#${randomHex}`
}

const generateGradient = (isRandom) => {
   if(isRandom) {
      colorInputs[0].value = getRandomColor()
      colorInputs[1].value = getRandomColor()
   }
   const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
   gradientBox.style.background = gradient
   textarea.value = `background: ${gradient}`
}

copyCode = () => {
   navigator.clipboard.writeText(textarea.value)
   copyBtn.innerHTML = `<i class="fa-solid fa-check" style="color: #ffffff;"></i> Code Copied`
   setTimeout(() => copyBtn.innerHTML = `<i class="fa-solid fa-copy" style="color: #ffffff;"></i> Copy Code`, 1600);
}

colorInputs.forEach(input => {
   input.addEventListener("input", () => generateGradient(false))
})

selectMenu.addEventListener("change", () => generateGradient(false))
refreshBtn.addEventListener("click", () => generateGradient(true))
copyBtn.addEventListener("click", copyCode)
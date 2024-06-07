const accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach(accordionItem => {
    const accordionButton = accordionItem.querySelector(".accordion-header")
    const accordionContent = accordionItem.querySelector(".accordion-content")
    accordionItem.style.height = accordionButton.clientHeight
    accordionButton.addEventListener("click", () => {
        if (accordionItem.classList.toggle("show")) {
            accordionButton.firstElementChild.textContent = '-'
            accordionItem.style.height = accordionButton.clientHeight + accordionContent.clientHeight
        } else {
            accordionButton.firstElementChild.textContent = '+'
            accordionItem.style.height = accordionButton.clientHeight
        }
    })
})

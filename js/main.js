document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector('.mobile-toggle')
    var bodyClasses = document.querySelector('body').classList
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        var body = document.querySelector('body')
        body.classList.toggle('nav-open')
      })
    }
    if (bodyClasses.contains('work')) {
      doWork()
    }
  })

  document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector('.mobile-toggle2')
    var bodyClasses = document.querySelector('body').classList
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        var body = document.querySelector('body')
        body.classList.toggle('nav-open')
      })
    }
    if (bodyClasses.contains('work')) {
      doWork()
    }
  })
  
  doWork = function () {
    var work = document.querySelectorAll('.four.columns')
    var workSort = document.querySelector('.work-sort')
    var workToggles = workSort.children
    for (var i = 0; i < workToggles.length; i++) {
      workToggles[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (var i = 0; i < workToggles.length; i++) {
          workToggles[i].classList.remove('active')
        }
        this.classList.add('active')
        var category = this.getAttribute('data-category')
        doSort(category, work)
      })
    }
  }
  
  doSort = function (cat, work) {
    for (var i = 0; i < work.length; i++) {
      if (cat == "all") {
        work[i].classList.remove('filtered')
  
      } else {
        if (work[i].classList.contains(cat)) {
          work[i].classList.remove('filtered')
        } else {
          work[i].classList.add('filtered')
        }
      }
  
    }
  }
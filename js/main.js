// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Service tabs
  var tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        tabButtons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        btn.setAttribute('aria-selected', 'true');
        document.querySelectorAll('.tab-panel').forEach(function (panel) {
          panel.classList.toggle('active', panel.id === target);
        });
      });
    });
  }

  // Contact form handler — submits to Formspree via fetch
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var formData = new FormData(form);

      if (submitBtn) {
        submitBtn.disabled = true;
      }
      if (status) {
        status.textContent = 'Sending...';
      }

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            if (status) {
              status.textContent = "Thanks — your message has been sent. We'll get back to you soon.";
            }
            form.reset();
          } else {
            return response.json().then(function (data) {
              var message = (data && data.errors && data.errors.length)
                ? data.errors.map(function (err) { return err.message; }).join(', ')
                : 'Something went wrong. Please try again or email us directly.';
              if (status) {
                status.textContent = message;
              }
            });
          }
        })
        .catch(function () {
          if (status) {
            status.textContent = 'Something went wrong. Please try again or email us directly.';
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
          }
        });
    });
  }
});

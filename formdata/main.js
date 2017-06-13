var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

var fields = document.querySelector('.fields');

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'select') {
    var select = document.createElement('select');
    select.placeholder = formData[i].label;
    select.id = formData[i].id;
    select.icon = formData[i].icon;
    fields.appendChild(select)
    var placeHolder = document.createElement('option')
    placeHolder.selected = 'selected';
    placeHolder.innerHTML = 'Select language...'
    select.appendChild(placeHolder)
    for (let s = 0; s < formData[i].options.length; s++) {
      var ops = document.createElement('option');
      ops.label = formData[i].options[s].label;
      ops.value = formData[i].options[s].value;
      select.appendChild(ops);
    }
  } else {
    var input = document.createElement('input');
    input.type = formData[i].type;
    input.placeholder = formData[i].label;
    input.id = formData[i].id;
    input.icon = formData[i].icon;
    fields.appendChild(input);
  }
}

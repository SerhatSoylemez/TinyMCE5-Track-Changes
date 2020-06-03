function insertTime() {
  var d = new Date();
  function addZero(i) { if (i < 10) { i = "0" + i; } return i; }
  var insertTime = d.getFullYear() + "-" + addZero(d.getMonth() +1 ) + "-" + addZero(d.getDate());
  return insertTime;
}

tinymce.init({
  selector: "textarea",  // change this value according to your HTML

  fullpage_default_encoding: "UTF-8",
 
  plugins: [
    "code fullpage",
  ],

  toolbar: "styleselect",
  
  menubar: "advanced view",

  menu: {
    advanced: { title: "Advanced", items: "formats trackchanges" },
    view: { title: "View", items: "code" },
  },

  style_formats: [
    { title: "Inserted", inline: "ins", attributes: { datetime: insertTime()}, styles: {"text-decoration": "none"} },
    { title: "Deleted", inline: "del", attributes: { datetime: insertTime()}, styles: {display: "none"} },
  ],

setup: (editor) => {

  editor.on('init', function(e) {
    tinymce.activeEditor.dom.addStyle("[datetime]::before { content: '('attr(datetime)') '; font-size: smaller; }");
    tinymce.activeEditor.dom.addStyle("ins[datetime] { color: #2DC26B; text-decoration: underline !important; }");
    tinymce.activeEditor.dom.addStyle("del[datetime] { color: #E03E2D; display: inline !important; }");
  });

  editor.ui.registry.addNestedMenuItem("trackchanges", {
    text: "Changes",
    getSubmenuItems: () => {
      return [
        {
          type: "menuitem",
          text: "Show Changes",
          onAction: () => {
            tinymce.activeEditor.dom.addStyle("[datetime]::before { content: '('attr(datetime)') '; font-size: smaller; }");
            tinymce.activeEditor.dom.addStyle("ins[datetime] { color: #2DC26B; text-decoration: underline !important; }");
            tinymce.activeEditor.dom.addStyle("del[datetime] { color: #E03E2D; display: inline !important; }");
          }
        },
        {
          type: "menuitem",
          text: "Hide Changes",
          onAction: () => {
            tinymce.activeEditor.dom.addStyle("[datetime]::before { content: ''; }");
            tinymce.activeEditor.dom.addStyle("ins[datetime] { color: initial; text-decoration: none !important; }");
            tinymce.activeEditor.dom.addStyle("del[datetime] { color: initial; display: none !important; }");
          }
        },
      ];
    }
  });

}
});

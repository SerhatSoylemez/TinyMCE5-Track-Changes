tinymce.PluginManager.add("trackchanges", function (editor) {

  editor.on("init", function(e) {
    var d = new Date();
    function addZero(i) { if (i < 10) { i = "0" + i; } return i; }
    var insertTime = addZero(d.getDate()) + "-" + addZero(d.getMonth() +1 ) + "-" + d.getFullYear();

    tinymce.activeEditor.formatter.register("inserted", {
      inline: "ins",
      attributes: { datetime: insertTime},
      styles: {"text-decoration": "none"},
    });

    tinymce.activeEditor.formatter.register("deleted", {
      inline: "del",
      attributes: { datetime: insertTime},
      styles: {"display": "none"},
    });

    tinymce.activeEditor.dom.addStyle(
      " [datetime]::before { content: '('attr(datetime)') '; font-size: smaller; } " +
      " ins[datetime] { color: #2DC26B; text-decoration: underline !important; } " +
      " del[datetime] { color: #E03E2D; display: inline !important; } "
    );
  });

  editor.ui.registry.addNestedMenuItem("trackchanges", {
    text: "Changes",
    getSubmenuItems: function() {
      return [

        {
          type: "menuitem",
          text: "Inserted Text",
          icon: "edit-block",
          onAction: function() {
            tinymce.activeEditor.formatter.apply("inserted");
          }
        },

        {
          type: "menuitem",
          text: "Deleted Text",
          icon: "remove",
          onAction: function() {
            tinymce.activeEditor.formatter.apply("deleted");
          }
        },

        {
          type: "menuitem",
          text: "Show Changes",
          icon: "comment-add",
          onAction: function() {
            tinymce.activeEditor.dom.addStyle(
              " [datetime]::before { content: '('attr(datetime)') '; font-size: smaller; } " +
              " ins[datetime] { color: #2DC26B; text-decoration: underline !important; } " +
              " del[datetime] { color: #E03E2D; display: inline !important; } "
            );
          }
        },

        {
          type: "menuitem",
          text: "Hide Changes",
          icon: "comment",
          onAction: function() {
            tinymce.activeEditor.dom.addStyle(
              " [datetime]::before { content: ''; } " +
              " ins[datetime] { color: initial; text-decoration: none !important; } " +
              " del[datetime] { color: initial; display: none !important; } "
            );
          }
        },

      ];
    }
  });

  editor.ui.registry.addButton("inserttext", {
    tooltip: "Inserted Text",
    icon: "edit-block",
    onAction: function() {
      tinymce.activeEditor.formatter.apply("inserted");
    }
  });

  editor.ui.registry.addButton("deletetext", {
    tooltip: "Deleted Text",
    icon: "remove",
    onAction: function() {
      tinymce.activeEditor.formatter.apply("deleted");
    }
  });

  editor.ui.registry.addButton("showchanges", {
    tooltip: "Show Changes",
    icon: "comment-add",
    onAction: function() {
      tinymce.activeEditor.dom.addStyle(
        " [datetime]::before { content: '('attr(datetime)') '; font-size: smaller; } " +
        " ins[datetime] { color: #2DC26B; text-decoration: underline !important; } " +
        " del[datetime] { color: #E03E2D; display: inline !important; } "
      );
    }
  });

  editor.ui.registry.addButton("hidechanges", {
    tooltip: "Hide Changes",
    icon: "comment",
    onAction: function() {
      tinymce.activeEditor.dom.addStyle(
        " [datetime]::before { content: ''; } " +
        " ins[datetime] { color: initial; text-decoration: none !important; } " +
        " del[datetime] { color: initial; display: none !important; } "
      );
    }
  });

});

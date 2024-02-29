import { atom, useAtom } from 'jotai';

const DefaultValueIos = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@ionic/core@7/css/ionic.bundle.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core@7/dist/ionic/ionic.js"></script>
    <title>ポップアップ</title>
  </head>
  <body>
    <style>
      ion-modal {
        --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }
    
      ion-modal::part(backdrop) {
        background: rgba(209, 213, 219);
        opacity: 1;
      }
    
      ion-modal ion-toolbar {
        --background: rgb(14 116 144);
        --color: white;
      }
    </style>

    <ion-modal is-open="true" mode="ios" style="">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>ポップアップ</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismissModal()">閉じる</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content >
        <ion-grid>
          <ion-row class="ion-padding">
            <ion-col size="4">
              <ion-img
                src="https://assets.stg.sprocket.bz/images/original/3f7c133e28c645a187d5d264ead5a54e/1-2.png"
              />
            </ion-col>
            <ion-col size="8">
              <ion-row>
                <ion-col size="12" class="ion-margin-bottom">
                  <ion-text>
                    <strong>商品検索をしてみませんか？</strong>
                  </ion-text>
                </ion-col>
                <ion-col size="12">
                  <ion-text
                    >欲しい商品がきっと見つかります</ion-text
                  >
                </ion-col>
              </ion-row>
            </ion-col>
            <ion-col size="6">
              <ion-button id="show_search" expand="block"
                >商品検索を使う</ion-button
              >
            </ion-col>
            <ion-col size="6">
              <ion-button id="dismiss" expand="block" color="light"
                >閉じる</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-modal>

    <script>
      var showSearchButton = document.getElementById("show_search");
      showSearchButton.addEventListener(
        "click",
        function () {
          sprocketSdk.trigger("button.click", "show_search");
        },
        false
      );

      var dismissButton = document.getElementById("dismiss");
      dismissButton.addEventListener(
        "click",
        function () {
          sprocketSdk.trigger("dismiss", "close");
        },
        false
      );
    </script>
  </body>
</html>`;

const DefaultValueAndoid = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@ionic/core@7/css/ionic.bundle.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core@7/dist/ionic/ionic.js"></script>
    <title>ポップアップ</title>
  </head>
  <body>
    <style>
      ion-modal {
        --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }
    
      ion-modal::part(backdrop) {
        background: rgba(209, 213, 219);
        opacity: 1;
      }
    
      ion-modal ion-toolbar {
        --background: rgb(14 116 144);
        --color: white;
      }
    </style>

    <ion-modal is-open="true" mode="md" style="">
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>ポップアップ</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismissModal()">閉じる</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content >
        <ion-grid>
          <ion-row class="ion-padding">
            <ion-col size="4">
              <ion-img
                src="https://assets.stg.sprocket.bz/images/original/3f7c133e28c645a187d5d264ead5a54e/1-2.png"
              />
            </ion-col>
            <ion-col size="8">
              <ion-row>
                <ion-col size="12" class="ion-margin-bottom">
                  <ion-text>
                    <strong>商品検索をしてみませんか？</strong>
                  </ion-text>
                </ion-col>
                <ion-col size="12">
                  <ion-text
                    >欲しい商品がきっと見つかります</ion-text
                  >
                </ion-col>
              </ion-row>
            </ion-col>
            <ion-col size="6">
              <ion-button id="show_search" expand="block"
                >商品検索を使う</ion-button
              >
            </ion-col>
            <ion-col size="6">
              <ion-button id="dismiss" expand="block" color="light"
                >閉じる</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-modal>

    <script>
      var showSearchButton = document.getElementById("show_search");
      showSearchButton.addEventListener(
        "click",
        function () {
          sprocketSdk.trigger("button.click", "show_search");
        },
        false
      );

      var dismissButton = document.getElementById("dismiss");
      dismissButton.addEventListener(
        "click",
        function () {
          sprocketSdk.trigger("dismiss", "close");
        },
        false
      );
    </script>
  </body>
</html>`;

export const editorContentValue = atom<string>(DefaultValueIos);
export const editorModalIsOpen = atom<boolean>(false);

export const useEditorContentValue = () => {
  const [content, setContent] = useAtom(editorContentValue);

  const setIosContent = () => {
    setContent(DefaultValueIos);
  };

  const setAndroidContent = () => {
    setContent(DefaultValueAndoid);
  };

  return {
    content,
    setContent,
    setIosContent,
    setAndroidContent,
  };
};

export const useEditorModalIsOpen = () => {
  const [isOpen, setIsOpen] = useAtom(editorModalIsOpen);

  return {
    isOpen,
    setIsOpen,
  };
};

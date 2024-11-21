# Open Dev Tools

There are many ways to open Dev Tools, because different users want quick access to different parts of the Dev Tools UI.

## 1.Open panels with shortcuts: Elements, Console, or your last panel

If you prefer keyboard, press a shortcut in Chrome depending on your operating system:

| OS | Elements | Console | Your last panel |
| --- | --- | --- | --- |
| Windows or Linux | Ctrl + Shift + **C** | Ctrl + Shift + **J** | F12Ctrl + Shift + **I** |
| Mac | Cmd + Option + **C** | Cmd + Option + **J** | Fn + F12Cmd + Option + **I** |

Here's an easy way to memorize the shortcuts:

- **C** stands for CSS.
- **J** for JavaScript.
- **I** designates your choice.

The **C** shortcut opens the **Elements** panel in ink_selection
 inspector mode. This mode shows you helpful tooltips when you hover 
over elements on a page. You can also click any element to view its CSS 
in the **Elements** > **Styles** tab.

## 2.**Open Dev Tools from Chrome menus**

If you prefer UI, you can access DevTools from drop-down menus in Chrome.

### Open the Elements panel to inspect the DOM or CSS

To inspect, right-click an element on a page and select

**Inspect**.

## **3.Auto-open Dev Tools on every new tab**

Run Chrome from the command line and pass the `--auto-open-devtools-for-tabs` flag:

1. Quit any running Chrome instance.
    
    **Key point:** This flag works only for the 
    first Chrome instance you open. If it doesn't work for you, for example,
     on Windows, make sure to end any residing Chrome processes from the 
    Task Manager.
    
2. Run your favorite terminal or command line application.
3. Depending on your operating system, run the following command:
- macOS:
- `open -a "Google Chrome" --args --auto-open-devtools-for-tabs`
- Windows:
- `start chrome --auto-open-devtools-for-tabs`
- Linux:
- `google-chrome --auto-open-devtools-for-tabs`

Dev Tools will automatically open for every new tab until you close Chrome.
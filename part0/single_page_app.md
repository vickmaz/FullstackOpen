## 0.5 Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server


        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        
        activate server
        server-->>browser: 200 OK (HTML DOC)
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        
        activate server
        server-->>browser: 200 OK (CSS DOC)
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        
        activate server
        server-->>browser: 200 OK (JS DOC)
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json.js
        
        activate server
        server-->>browser: 200 OK (Json notes parsed)
        deactivate server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        
        activate server
        server-->>browser: 201 OK (Note created and sent to server)
        deactivate server


```
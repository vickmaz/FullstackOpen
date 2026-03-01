## 0.6 New Note Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        
        activate server
        server-->>browser: 201 OK (Note created and sent to server)
        deactivate server


```
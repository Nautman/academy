I /academy

Om du vill skapa en app i react behöver du först installera ett package, som i princip är ett program, kallat `create-react-app`.
Du kan installera det genom `npm install -g create-react-app`. Argumentet `-g` står för att du installerar ett paket globalt, och således alltid kan användas på din dator.

När du vill skapa en app använder du följande kommando, som skapar en app med namnet `project-name`.
```
create-react-app project-name
```

Flytta in dig i foldern med `cd project-name`.
I foldern `src` finns all din kod för React-appen.

# React-router
Om du vill att en React-app ska ha flera sidor så kan man använda sig av `react-router`.
Paketet som är specifikt för webben heter `react-router-dom`. Du kan läsa mer om det [här](https://reacttraining.com/react-router/web/guides/quick-start). Anledningen att det heter `dom` är för att webben och därmed HTML och JavaScript (som React bygger på) använder modellen som kallas DOM. Det står för [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model).
 För att installera det använder du som du säkert redan listat ut

```
npm install react-router-dom --save
```

I `src/App.js` behöver du implementera "Routern", det vill säga den sak som dirigerar användaren till rätt komponenter.
```js
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      Hej!
    </Router>
  );
}
```

```html
<Router>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
</Router>
```

https://redux.js.org/introduction/getting-started
```
npm install --save redux
npm install --save react-redux
```

`reducers/index.js`

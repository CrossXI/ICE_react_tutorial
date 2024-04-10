import logo from './logo.svg'
import './App.css'
import { useCounterStore, useThemeStore } from './store'
import Counter from './components/Counter'
import ThemeControl from './components/ThemeControl'

function App() {
  //ใช้ได้เเต่จะทำให้เรนเดอร์ app ทุกครั้ง
  /* const { increment, decrement } = useCounterStore() */
  //ใช้เเบบนี้จะทำให้เรนเดอร์เเค่ component counter
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  const color = useThemeStore((state) => state.color)
  const bgColor = useThemeStore((state) => state.backgroundColor)

  console.log(`App:render`)
  return (
    <div className="App">
      <header className="App-header"
        style={{
          backgroundColor: bgColor,
          color
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          State Management Test with Zustand.
        </p>

        <button type="button" onClick={increment}>
          Increment
        </button>
        <button type="button" onClick={decrement}>
          Decrement
        </button>

        <Counter />
        <ThemeControl />

      </header>
    </div>
  );
}

export default App;

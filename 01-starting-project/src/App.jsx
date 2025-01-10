import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(buttonSelected) {
    console.log(buttonSelected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={function () {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={function () {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={function () {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={function () {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

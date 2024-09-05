import { DevContainer } from 'composaic/lib/dev/DevContainer';

const loadModule = async (moduleName: string, pkg: string) => {
    const module = await import(`./plugins/${pkg}/${moduleName}.ts`);
    return module;
};

function App() {
    return <DevContainer loadModuleFn={loadModule}></DevContainer>;
}

export default App;

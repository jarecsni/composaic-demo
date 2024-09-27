import { DevContainer } from 'composaic';
import { config } from './config';

const loadModule = async (moduleName: string, pkg: string) => {
    const module = await import(`./plugins/${pkg}/${moduleName}.ts`);
    return module;
};

function App() {
    return <DevContainer loadModuleFn={loadModule} config={config}></DevContainer>;
}

export default App;

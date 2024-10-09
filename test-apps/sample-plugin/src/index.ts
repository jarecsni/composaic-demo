import { coolStuff } from './some-other-module';

export const sayHello = (name: string) => {
    return `Hello, ${name}! cool=${coolStuff(name)}`;
}

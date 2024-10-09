import { coolStuff } from './some-other-module';
import dayjs from 'dayjs/esm';

export const sayHello = (name: string) => {
    return `Hello, ${name}! cool=${coolStuff(name)} -- Current date and time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`;
}

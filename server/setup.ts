import UserCtrl from './controllers/user';

export default function setup() {
    const userCtrl = new UserCtrl();
    userCtrl.setup();
}
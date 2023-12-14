import {QVueGlobals} from 'quasar';
import RequestDialogComponent from 'components/RequestDialogComponent.vue';
import {RouterService} from 'src/services/RouterService';
import {inject} from 'vue';


const $routerService: RouterService | undefined = inject('$routerService')

export function openDialog(q: QVueGlobals) {
  q.dialog({
    component: RequestDialogComponent,
  }).onOk((health: boolean) => {
    if (health) {
      q.notify({
        color: 'positive',
        position: 'top',
        message: 'Anfrage gesendet!',
        timeout: 2000, // Optional: Set the timeout duration in milliseconds (default is 3000)
      });
    } else {
      q.notify({
        color: 'negative',
        position: 'top',
        message: 'Anfrage fehlgeschlagen!',
        timeout: 2000, // Optional: Set the timeout duration in milliseconds (default is 3000)
      });
    }
  }).onCancel(() => {
    void $routerService?.pop()
  });
}

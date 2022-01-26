// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_base_backend: 'http://localhost:8000/api',//http://reserva.buenavistamancora.com/api',
  url_root_backend: 'http://localhost:8000',//'http://reserva.buenavistamancora.com',
  url_root_frontend: 'http://localhost:4200',
  url_pago:'http://localhost:9100',
  key_acceso_backend: 'XYjy3o4x.KWBHMyy0I6Yb30q1FH2MJuUAjQf1J5il'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

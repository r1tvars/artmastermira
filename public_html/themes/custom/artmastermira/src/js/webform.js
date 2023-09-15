// (function ($, Drupal) {
//   Drupal.behaviors.webform = {
//     attach: function attach(context) {

//       function waitForElm(selector) {
//         return new Promise(resolve => {
//             if (document.querySelector(selector)) {
//                 return resolve(document.querySelector(selector));
//             }
    
//             const observer = new MutationObserver(mutations => {
//                 if (document.querySelector(selector)) {
//                     resolve(document.querySelector(selector));
//                     observer.disconnect();
//                 }
//             });
    
//             observer.observe(document.body, {
//                 childList: true,
//                 subtree: true
//             });
//         });
//       }
//       $('body', context).each(function () {
//         $(document).ready(function (e) {
//           // check when modal dialog with form is open to add custom FontAwesome icon
//           $(document).on('click', '.webform-button--submit', function(){
//             // when form submit add custom elements to thank you view
//             waitForElm('.webform-confirmation-modal--content').then(() => {
//               // remove duplicate elements when spaming the form buttons
//               setTimeout(() => {
//                 $('.webform-thanks-item').remove();
//                 $('.ui-dialog-title').before('<img class="webform-thanks-item" src="/themes/custom/researchlatvia/dist/assets/confirm.png">');
//                 $('.webform-confirmation-modal--content').append('<span class="webform-modal-thank-you-close webform-thanks-item font-ptsans mt-[23px] mb-1 p-cta bg-white_primary rounded-md border border-gray-10 shadow-cta-btn text-black_secondary text-smx text-center z-10 cursor-pointer">'+Drupal.t("Close")+'</span>');
//                 $('.webform-confirmation-modal').css({
//                   'inset': '0',
//                   'margin': 'auto'
//                 });
//               }, 100);
//               $(document).on('click', '.webform-modal-thank-you-close', function(){
//                 $('body').removeClass('overflow-y-hidden');
//                 $( ".webform-confirmation-modal--content" ).dialog( "close" );
//               });
//             });
//           });
//         });
//       });
//     },
//   }
// })(jQuery, Drupal)
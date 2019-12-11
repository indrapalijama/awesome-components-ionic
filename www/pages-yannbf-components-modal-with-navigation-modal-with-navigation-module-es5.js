(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-modal-with-navigation-modal-with-navigation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-nav [root]=\"modalPage\" [(rootParams)]=\"modalParams\" #content></ion-nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Modal With Navigation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-label>\r\n    <p class=\"ion-padding\">\r\n      This sample simulates the behavior of moving files/folders of known apps like dropbox or google drive:\r\n    </p>\r\n  </ion-label>\r\n\r\n  <ion-list>\r\n    <ion-list-header>Files</ion-list-header>\r\n    <ion-item *ngFor=\"let document of documents\">\r\n      <ion-icon name=\"document\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        {{document.name}}\r\n      </ion-label>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"presentActionSheet(document)\">\r\n        <ion-icon name=\"more\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"thisFolder.name === 'Documents'\">\r\n      <ion-button slot=\"icon-only\" (click)=\"closeModal()\">\r\n        Cancel\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{thisFolder.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let folder of folders\" (click)=\"goToFolder(folder)\">\r\n      <ion-icon name=\"folder\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <h2>{{folder.name}}</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"ion-padding\">\r\n  <ion-toolbar color=\"pipe\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"moveHere(thisFolder)\">\r\n        Move Here\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModalNavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNavPageModule", function() { return ModalNavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_nav_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-nav.page */ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.ts");






var ModalNavPageModule = /** @class */ (function () {
    function ModalNavPageModule() {
    }
    ModalNavPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_modal_nav_page__WEBPACK_IMPORTED_MODULE_5__["ModalNavPage"]],
            entryComponents: [_modal_nav_page__WEBPACK_IMPORTED_MODULE_5__["ModalNavPage"]]
        })
    ], ModalNavPageModule);
    return ModalNavPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21vZGFsLXdpdGgtbmF2aWdhdGlvbi9tb2RhbC1uYXYvbW9kYWwtbmF2LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModalNavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNavPage", function() { return ModalNavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ModalNavPage = /** @class */ (function () {
    function ModalNavPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.modalParams = {};
    }
    ModalNavPage.prototype.ngOnInit = function () { };
    ModalNavPage.prototype.dismissModal = function (data) {
        this.modalCtrl.dismiss({ name: data });
    };
    ModalNavPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalNavPage.prototype, "modalPage", void 0);
    ModalNavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-nav',
            template: __webpack_require__(/*! raw-loader!./modal-nav.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.html"),
            styles: [__webpack_require__(/*! ./modal-nav.page.scss */ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalNavPage);
    return ModalNavPage;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ModalWithNavigationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWithNavigationPageModule", function() { return ModalWithNavigationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_with_navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-with-navigation.page */ "./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.ts");
/* harmony import */ var _move_document_move_document_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./move-document/move-document.module */ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.module.ts");
/* harmony import */ var _modal_nav_modal_nav_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-nav/modal-nav.module */ "./src/app/pages/yannbf/components/modal-with-navigation/modal-nav/modal-nav.module.ts");









var routes = [
    {
        path: '',
        component: _modal_with_navigation_page__WEBPACK_IMPORTED_MODULE_6__["ModalWithNavigationPage"]
    }
];
var ModalWithNavigationPageModule = /** @class */ (function () {
    function ModalWithNavigationPageModule() {
    }
    ModalWithNavigationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _modal_nav_modal_nav_module__WEBPACK_IMPORTED_MODULE_8__["ModalNavPageModule"],
                _move_document_move_document_module__WEBPACK_IMPORTED_MODULE_7__["MoveDocumentPageModule"]
            ],
            declarations: [_modal_with_navigation_page__WEBPACK_IMPORTED_MODULE_6__["ModalWithNavigationPage"]]
        })
    ], ModalWithNavigationPageModule);
    return ModalWithNavigationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21vZGFsLXdpdGgtbmF2aWdhdGlvbi9tb2RhbC13aXRoLW5hdmlnYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: ModalWithNavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWithNavigationPage", function() { return ModalWithNavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _move_document_move_document_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./move-document/move-document.page */ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.ts");




var ModalWithNavigationPage = /** @class */ (function () {
    function ModalWithNavigationPage(navCtrl, actionSheetCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.documents = [{
                name: 'Ionic.sketch',
            }, {
                name: 'Envudu.sketch'
            }, {
                name: 'Fazescardgame.sketch'
            }, {
                name: 'Lucidchart.sketch'
            }];
    }
    ModalWithNavigationPage.prototype.ngOnInit = function () {
    };
    ModalWithNavigationPage.prototype.presentActionSheet = function (document) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: document.name,
                            buttons: [
                                {
                                    text: 'Move',
                                    handler: function () {
                                        _this.moveDocumentModal(document);
                                        console.log('Move clicked');
                                    }
                                }, {
                                    text: 'Rename',
                                    handler: function () {
                                        var navTransition = actionSheet.dismiss();
                                        navTransition.then(function () {
                                            // wait until action sheet dismisses
                                            _this.renameDocument(document);
                                            console.log('Rename clicked');
                                        });
                                        return false;
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalWithNavigationPage.prototype.moveDocumentModal = function (document) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _move_document_move_document_page__WEBPACK_IMPORTED_MODULE_3__["MoveDocumentPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            console.log('"' + document.name + '" moved to folder "' + data.name + '"');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalWithNavigationPage.prototype.renameDocument = function (document) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prompt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Rename Document',
                            inputs: [
                                {
                                    name: 'title',
                                    placeholder: 'Title',
                                    value: document.name
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Save',
                                    handler: function (data) {
                                        document.name = data.title;
                                        console.log('Saved clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        prompt = _a.sent();
                        return [4 /*yield*/, prompt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalWithNavigationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ModalWithNavigationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-with-navigation',
            template: __webpack_require__(/*! raw-loader!./modal-with-navigation.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.html"),
            styles: [__webpack_require__(/*! ./modal-with-navigation.page.scss */ "./src/app/pages/yannbf/components/modal-with-navigation/modal-with-navigation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ModalWithNavigationPage);
    return ModalWithNavigationPage;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MoveDocumentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveDocumentPageModule", function() { return MoveDocumentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _move_document_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./move-document.page */ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.ts");






var MoveDocumentPageModule = /** @class */ (function () {
    function MoveDocumentPageModule() {
    }
    MoveDocumentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_move_document_page__WEBPACK_IMPORTED_MODULE_5__["MoveDocumentPage"]],
            entryComponents: [_move_document_page__WEBPACK_IMPORTED_MODULE_5__["MoveDocumentPage"]]
        })
    ], MoveDocumentPageModule);
    return MoveDocumentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21vZGFsLXdpdGgtbmF2aWdhdGlvbi9tb3ZlLWRvY3VtZW50L21vdmUtZG9jdW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: MoveDocumentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveDocumentPage", function() { return MoveDocumentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MoveDocumentPage = /** @class */ (function () {
    function MoveDocumentPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.folders = [
            {
                name: 'My Folder 1',
            }, {
                name: 'My Folder 2'
            }, {
                name: 'My Folder 3'
            }, {
                name: 'My Folder 4'
            }
        ];
    }
    MoveDocumentPage_1 = MoveDocumentPage;
    MoveDocumentPage.prototype.ngOnInit = function () {
        console.log(this.thisFolder);
        if (!this.thisFolder) {
            this.thisFolder = { name: 'Documents' };
        }
    };
    MoveDocumentPage.prototype.goToFolder = function (folder) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: MoveDocumentPage_1,
                            componentProps: {
                                thisFolder: folder,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoveDocumentPage.prototype.moveHere = function (folder) {
        this.modalCtrl.dismiss({ thisFolder: folder });
    };
    MoveDocumentPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    var MoveDocumentPage_1;
    MoveDocumentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoveDocumentPage.prototype, "thisFolder", void 0);
    MoveDocumentPage = MoveDocumentPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-move-document',
            template: __webpack_require__(/*! raw-loader!./move-document.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.html"),
            styles: [__webpack_require__(/*! ./move-document.page.scss */ "./src/app/pages/yannbf/components/modal-with-navigation/move-document/move-document.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], MoveDocumentPage);
    return MoveDocumentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-modal-with-navigation-modal-with-navigation-module-es5.js.map
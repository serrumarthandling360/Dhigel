(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"paddingTop":0,"propagateClick":false,"mediaActivationMode":"window","mobileMipmappingEnabled":false,"id":"rootPlayer","paddingLeft":0,"gap":10,"verticalAlign":"top","children":["this.MainViewer","this.Image_978C40D9_8631_9ABF_4193_31A000339328","this.Image_95060270_8633_F98E_41DB_EEC32BBE84B2","this.Image_95255D92_8630_8A8D_41CB_95C17E869FE8","this.Image_95E34E71_86D0_898E_41A6_B98275DB90B9","this.Image_9514A75F_86D1_87B2_41B1_300533340AA0","this.Image_957E9CE8_86D0_8A9D_41D3_E4B1BD1A38F3"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","paddingRight":0,"overflow":"hidden","scripts":{"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isPanorama":TDV.Tour.Script.isPanorama,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"clone":TDV.Tour.Script.clone,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"init":TDV.Tour.Script.init,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setLocale":TDV.Tour.Script.setLocale,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"shareSocial":TDV.Tour.Script.shareSocial,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"cloneCamera":TDV.Tour.Script.cloneCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"unregisterKey":TDV.Tour.Script.unregisterKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showWindow":TDV.Tour.Script.showWindow,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"mixObject":TDV.Tour.Script.mixObject,"playAudioList":TDV.Tour.Script.playAudioList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"registerKey":TDV.Tour.Script.registerKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"translate":TDV.Tour.Script.translate,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia},"horizontalAlign":"left","width":"100%","scrollBarMargin":2,"borderRadius":0,"borderSize":0,"scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"scrollBarWidth":10,"contentOpaque":false,"layout":"absolute","height":"100%","minHeight":20,"backgroundOpacity":1,"vrPolyfillScale":0.75,"minWidth":20,"class":"Player","mouseWheelEnabled":true,"scrollBarOpacity":0.5,"data":{"name":"Player46352","defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"}},"shadow":false,"scrollBarColor":"#000000","definitions": [{"propagateClick":false,"id":"Image_978C40D9_8631_9ABF_4193_31A000339328","left":"1.48%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_978C40D9_8631_9ABF_4193_31A000339328.png","horizontalAlign":"center","width":"2.581%","borderRadius":0,"borderSize":0,"bottom":"2.75%","height":"3.451%","click":"this.WebFrame_9F848883_86D3_8A92_41D8_001A9F058A50.set('url', this.translate('PopupWebFrameBehaviour_94729CB1_8630_8A8F_41D2_56D76E6FCF81.url')); this.showWindow(this.window_94725CB1_8630_8A8F_41D3_B3E8FC140CAD, null, false)","minHeight":1,"backgroundOpacity":0,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image46356"},"toolTipHorizontalAlign":"center","scaleMode":"fit_inside","paddingTop":0,"paddingBottom":0,"cursor":"hand"},{"closeButtonPaddingRight":0,"bodyPaddingRight":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"gap":10,"id":"window_94725CB1_8630_8A8F_41D3_B3E8FC140CAD","footerBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonIconColor":"#B2B2B2","headerPaddingRight":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerHeight":5,"closeButtonBorderRadius":11,"modal":true,"horizontalAlign":"center","width":"80%","scrollBarMargin":2,"borderRadius":5,"borderSize":0,"scrollBarVisible":"rollOver","closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","backgroundColor":[],"backgroundColorRatios":[],"scrollBarWidth":10,"veilOpacity":0.4,"backgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"height":"80%","bodyPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"veilColor":["#000000","#000000"],"shadow":true,"veilColorRatios":[0,1],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"scrollBarColor":"#000000","bodyPaddingTop":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"paddingBottom":0,"closeButtonBorderColor":"#000000","propagateClick":false,"children":["this.WebFrame_9F848883_86D3_8A92_41D8_001A9F058A50"],"closeButtonRollOverBorderSize":0,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"bodyPaddingBottom":0,"paddingLeft":0,"shadowColor":"#000000","verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","closeButtonRollOverBackgroundColor":[],"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"shadowBlurRadius":6,"headerBackgroundOpacity":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"paddingTop":0,"backgroundColorDirection":"vertical","shadowSpread":1,"closeButtonPaddingLeft":0,"contentOpaque":false,"closeButtonBorderSize":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"headerPaddingBottom":5,"closeButtonPressedBorderColor":"#000000","closeButtonBackgroundOpacity":0,"minWidth":20,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"class":"Window","footerBackgroundColorRatios":[0,0.9,1],"data":{"name":"Window47106"},"closeButtonIconHeight":20,"titlePaddingTop":5,"closeButtonPaddingTop":0,"closeButtonPressedBackgroundOpacity":0,"veilColorDirection":"horizontal","headerPaddingTop":10},{"closeButtonPaddingRight":0,"bodyPaddingRight":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"gap":10,"id":"window_954E4858_8631_89BD_41D7_A25291A46EED","footerBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonIconColor":"#B2B2B2","headerPaddingRight":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerHeight":5,"closeButtonBorderRadius":11,"modal":true,"horizontalAlign":"center","width":"50%","scrollBarMargin":2,"borderRadius":5,"borderSize":0,"scrollBarVisible":"rollOver","closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","backgroundColor":[],"backgroundColorRatios":[],"scrollBarWidth":10,"veilOpacity":0.4,"backgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"height":"50%","bodyPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"veilColor":["#000000","#000000"],"shadow":true,"veilColorRatios":[0,1],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"scrollBarColor":"#000000","bodyPaddingTop":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"paddingBottom":0,"closeButtonBorderColor":"#000000","propagateClick":false,"children":["this.WebFrame_9F84E883_86D3_8A92_41E0_8B0ABFD3D459"],"closeButtonRollOverBorderSize":0,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"bodyPaddingBottom":0,"paddingLeft":0,"shadowColor":"#000000","verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","closeButtonRollOverBackgroundColor":[],"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"shadowBlurRadius":6,"headerBackgroundOpacity":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"paddingTop":0,"backgroundColorDirection":"vertical","shadowSpread":1,"closeButtonPaddingLeft":0,"contentOpaque":false,"closeButtonBorderSize":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"headerPaddingBottom":5,"closeButtonPressedBorderColor":"#000000","closeButtonBackgroundOpacity":0,"minWidth":20,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"class":"Window","footerBackgroundColorRatios":[0,0.9,1],"data":{"name":"Window48129"},"closeButtonIconHeight":20,"titlePaddingTop":5,"closeButtonPaddingTop":0,"closeButtonPressedBackgroundOpacity":0,"veilColorDirection":"horizontal","headerPaddingTop":10},{"items":[{"media":"this.panorama_97B34064_8631_7995_41AC_06EEB2D545CC","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_97B34064_8631_7995_41AC_06EEB2D545CC_camera"}],"id":"mainPlayList","class":"PlayList"},{"propagateClick":false,"id":"Image_957E9CE8_86D0_8A9D_41D3_E4B1BD1A38F3","left":"26.63%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_957E9CE8_86D0_8A9D_41D3_E4B1BD1A38F3.png","horizontalAlign":"center","width":"46.388%","borderRadius":0,"borderSize":0,"bottom":"23.5%","height":"47.059%","click":"this.WebFrame_9F850883_86D3_8A92_41CA_91D8379BBB64.set('url', this.translate('PopupWebFrameBehaviour_907EB100_86D1_7B8D_41D3_492061D36B93.url')); this.showWindow(this.window_91F90795_86D7_86B7_41D2_61759DD05F2C, null, false)","minHeight":1,"backgroundOpacity":0,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image56021"},"toolTipHorizontalAlign":"center","scaleMode":"fit_inside","paddingTop":0,"paddingBottom":0},{"propagateClick":false,"id":"Image_95255D92_8630_8A8D_41CB_95C17E869FE8","left":"7.05%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_95255D92_8630_8A8D_41CB_95C17E869FE8.png","horizontalAlign":"center","width":"2.076%","borderRadius":0,"borderSize":0,"bottom":"2.82%","height":"3.608%","click":"this.WebFrame_9F84C883_86D3_8A92_41C6_3AC32BDE4718.set('url', this.translate('PopupWebFrameBehaviour_94A5CC2D_86D0_8997_41CC_B696E68F1209.url')); this.showWindow(this.window_95360F5F_86D3_87B3_41D2_6E96B895E5C5, null, false)","minHeight":1,"backgroundOpacity":0,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image49189"},"toolTipHorizontalAlign":"center","scaleMode":"fit_inside","paddingTop":0,"paddingBottom":0},{"propagateClick":false,"id":"Image_95E34E71_86D0_898E_41A6_B98275DB90B9","left":"9.34%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_95E34E71_86D0_898E_41A6_B98275DB90B9.png","horizontalAlign":"center","width":"2.104%","borderRadius":0,"borderSize":0,"bottom":"2.82%","height":"3.608%","click":"this.WebFrame_9F852883_86D3_8A92_41C6_BEF1E4C4EDC5.set('url', this.translate('PopupWebFrameBehaviour_943689FE_86D1_8A75_41D2_9624C61AE079.url')); this.showWindow(this.window_9436C9FE_86D1_8A75_41D0_1598A73ED260, null, false)","minHeight":1,"backgroundOpacity":0,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image54890"},"toolTipHorizontalAlign":"center","scaleMode":"fit_inside","paddingTop":0,"paddingBottom":0},{"closeButtonPaddingRight":0,"bodyPaddingRight":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"gap":10,"id":"window_91F90795_86D7_86B7_41D2_61759DD05F2C","footerBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonIconColor":"#B2B2B2","headerPaddingRight":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerHeight":5,"closeButtonBorderRadius":11,"modal":true,"horizontalAlign":"center","width":"90%","scrollBarMargin":2,"borderRadius":5,"borderSize":0,"scrollBarVisible":"rollOver","closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","backgroundColor":[],"backgroundColorRatios":[],"scrollBarWidth":10,"veilOpacity":0.4,"backgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"height":"90%","bodyPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"veilColor":["#000000","#000000"],"shadow":true,"veilColorRatios":[0,1],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"scrollBarColor":"#000000","bodyPaddingTop":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"paddingBottom":0,"closeButtonBorderColor":"#000000","propagateClick":false,"children":["this.WebFrame_9F850883_86D3_8A92_41CA_91D8379BBB64"],"closeButtonRollOverBorderSize":0,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"bodyPaddingBottom":0,"paddingLeft":0,"shadowColor":"#000000","verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","closeButtonRollOverBackgroundColor":[],"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"shadowBlurRadius":6,"headerBackgroundOpacity":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"paddingTop":0,"backgroundColorDirection":"vertical","shadowSpread":1,"closeButtonPaddingLeft":0,"contentOpaque":false,"closeButtonBorderSize":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"headerPaddingBottom":5,"closeButtonPressedBorderColor":"#000000","closeButtonBackgroundOpacity":0,"minWidth":20,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"class":"Window","footerBackgroundColorRatios":[0,0.9,1],"data":{"name":"Window57156"},"closeButtonIconHeight":20,"titlePaddingTop":5,"closeButtonPaddingTop":0,"closeButtonPressedBackgroundOpacity":0,"veilColorDirection":"horizontal","headerPaddingTop":10},{"label":trans('panorama_97B34064_8631_7995_41AC_06EEB2D545CC.label'),"id":"panorama_97B34064_8631_7995_41AC_06EEB2D545CC","hfovMin":"150%","pitch":0,"partial":false,"class":"Panorama","hfov":360,"data":{"label":"R0010836"},"thumbnailUrl":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_t.png","hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":12288,"rowCount":4,"colCount":24,"height":2048},{"url":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":9216,"rowCount":1,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_97B34064_8631_7995_41AC_06EEB2D545CC_t.jpg"}],"vfov":180},{"propagateClick":false,"id":"Image_9514A75F_86D1_87B2_41B1_300533340AA0","left":"1.22%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_9514A75F_86D1_87B2_41B1_300533340AA0.png","horizontalAlign":"center","width":"6.527%","borderRadius":0,"borderSize":0,"top":"1.54%","height":"12.914%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"shadow":false,"toolTipHorizontalAlign":"center","data":{"name":"Image55977"},"scaleMode":"fit_inside","class":"Image","paddingTop":0,"paddingBottom":0},{"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_97B34064_8631_7995_41AC_06EEB2D545CC_camera","initialSequence":"this.sequence_8A01D08B_85D1_BA93_41D1_FF706240DB56","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"closeButtonPaddingRight":0,"bodyPaddingRight":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"gap":10,"id":"window_9436C9FE_86D1_8A75_41D0_1598A73ED260","footerBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonIconColor":"#B2B2B2","headerPaddingRight":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerHeight":5,"closeButtonBorderRadius":11,"modal":true,"horizontalAlign":"center","width":"40%","scrollBarMargin":2,"borderRadius":5,"borderSize":0,"scrollBarVisible":"rollOver","closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","backgroundColor":[],"backgroundColorRatios":[],"scrollBarWidth":10,"veilOpacity":0.4,"backgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"height":"80%","bodyPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"veilColor":["#000000","#000000"],"shadow":true,"veilColorRatios":[0,1],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"scrollBarColor":"#000000","bodyPaddingTop":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"paddingBottom":0,"closeButtonBorderColor":"#000000","propagateClick":false,"children":["this.WebFrame_9F852883_86D3_8A92_41C6_BEF1E4C4EDC5"],"closeButtonRollOverBorderSize":0,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"bodyPaddingBottom":0,"paddingLeft":0,"shadowColor":"#000000","verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","closeButtonRollOverBackgroundColor":[],"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"shadowBlurRadius":6,"headerBackgroundOpacity":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"paddingTop":0,"backgroundColorDirection":"vertical","shadowSpread":1,"closeButtonPaddingLeft":0,"contentOpaque":false,"closeButtonBorderSize":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"headerPaddingBottom":5,"closeButtonPressedBorderColor":"#000000","closeButtonBackgroundOpacity":0,"minWidth":20,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"class":"Window","footerBackgroundColorRatios":[0,0.9,1],"data":{"name":"Window55640"},"closeButtonIconHeight":20,"titlePaddingTop":5,"closeButtonPaddingTop":0,"closeButtonPressedBackgroundOpacity":0,"veilColorDirection":"horizontal","headerPaddingTop":10},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"propagateClick":false,"id":"Image_95060270_8633_F98E_41DB_EEC32BBE84B2","left":"4.31%","paddingLeft":0,"verticalAlign":"middle","paddingRight":0,"url":"skin/Image_95060270_8633_F98E_41DB_EEC32BBE84B2.png","horizontalAlign":"center","width":"2.654%","borderRadius":0,"borderSize":0,"bottom":"2.9%","height":"3.635%","click":"this.WebFrame_9F84E883_86D3_8A92_41E0_8B0ABFD3D459.set('url', this.translate('PopupWebFrameBehaviour_9464F8B2_8630_8A8D_41D6_0B92924F0710.url')); this.showWindow(this.window_954E4858_8631_89BD_41D7_A25291A46EED, null, false)","minHeight":1,"backgroundOpacity":0,"minWidth":1,"class":"Image","shadow":false,"data":{"name":"Image47378"},"toolTipHorizontalAlign":"center","scaleMode":"fit_inside","paddingTop":0,"paddingBottom":0},{"toolTipShadowSpread":0,"id":"MainViewer","subtitlesBackgroundOpacity":0.2,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","firstTransitionDuration":0,"playbackBarHeight":10,"transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","transitionMode":"blending","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"borderRadius":0,"borderSize":0,"subtitlesTextShadowBlurRadius":0,"progressBackgroundColor":["#FFFFFF"],"progressOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowVerticalLength":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipFontStyle":"normal","height":"100%","subtitlesPaddingTop":5,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"subtitlesTextDecoration":"none","playbackBarHeadShadowOpacity":0.7,"width":"100%","subtitlesGap":0,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipOpacity":1,"vrPointerSelectionTime":2000,"doubleClickAction":"toggle_fullscreen","displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"shadow":false,"progressHeight":10,"playbackBarBackgroundOpacity":1,"progressBorderSize":0,"toolTipBorderSize":1,"subtitlesTextShadowHorizontalLength":1,"toolTipHorizontalAlign":"center","playbackBarProgressBackgroundColorRatios":[0],"paddingTop":0,"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipPaddingBottom":4,"subtitlesVerticalAlign":"bottom","subtitlesHorizontalAlign":"center","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","subtitlesEnabled":true,"playbackBarHeadHeight":15,"toolTipPaddingRight":6,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"paddingLeft":0,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","paddingRight":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleOpacity":0.6,"playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"progressBorderRadius":0,"playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"progressBackgroundOpacity":1,"playbackBarHeadShadow":true,"subtitlesFontWeight":"normal","progressBarBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":0,"playbackBarBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"minHeight":50,"playbackBarHeadShadowHorizontalLength":0,"subtitlesPaddingLeft":5,"progressRight":0,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarOpacity":1,"toolTipPaddingLeft":6,"minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"class":"ViewerArea","toolTipFontWeight":"normal","displayTooltipInSurfaceSelection":true,"toolTipTextShadowOpacity":0,"subtitlesTextShadowColor":"#000000","playbackBarBottom":5,"progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"subtitlesPaddingRight":5,"toolTipFontColor":"#606060","data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin"},{"closeButtonPaddingRight":0,"bodyPaddingRight":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"gap":10,"id":"window_95360F5F_86D3_87B3_41D2_6E96B895E5C5","footerBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonIconColor":"#B2B2B2","headerPaddingRight":0,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerHeight":5,"closeButtonBorderRadius":11,"modal":true,"horizontalAlign":"center","width":"17%","scrollBarMargin":2,"borderRadius":5,"borderSize":0,"scrollBarVisible":"rollOver","closeButtonPressedIconColor":"#FFFFFF","headerVerticalAlign":"middle","backgroundColor":[],"backgroundColorRatios":[],"scrollBarWidth":10,"veilOpacity":0.4,"backgroundOpacity":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"height":"50%","bodyPaddingLeft":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"veilColor":["#000000","#000000"],"shadow":true,"veilColorRatios":[0,1],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"scrollBarColor":"#000000","bodyPaddingTop":0,"closeButtonIconWidth":20,"titleFontFamily":"Arial","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"paddingBottom":0,"closeButtonBorderColor":"#000000","propagateClick":false,"children":["this.WebFrame_9F84C883_86D3_8A92_41C6_3AC32BDE4718"],"closeButtonRollOverBorderSize":0,"titleFontSize":"1.29vmin","closeButtonRollOverIconLineWidth":2,"bodyPaddingBottom":0,"paddingLeft":0,"shadowColor":"#000000","verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"overflow":"scroll","closeButtonRollOverBackgroundColor":[],"titlePaddingLeft":5,"headerBackgroundColorRatios":[0,0.1,1],"paddingRight":0,"shadowBlurRadius":6,"headerBackgroundOpacity":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonPressedIconLineWidth":3,"bodyBackgroundOpacity":0,"paddingTop":0,"backgroundColorDirection":"vertical","shadowSpread":1,"closeButtonPaddingLeft":0,"contentOpaque":false,"closeButtonBorderSize":0,"closeButtonIconLineWidth":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"headerPaddingBottom":5,"closeButtonPressedBorderColor":"#000000","closeButtonBackgroundOpacity":0,"minWidth":20,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingRight":5,"class":"Window","footerBackgroundColorRatios":[0,0.9,1],"data":{"name":"Window52297"},"closeButtonIconHeight":20,"titlePaddingTop":5,"closeButtonPaddingTop":0,"closeButtonPressedBackgroundOpacity":0,"veilColorDirection":"horizontal","headerPaddingTop":10},{"paddingTop":0,"propagateClick":false,"id":"WebFrame_9F848883_86D3_8A92_41D8_001A9F058A50","paddingLeft":0,"paddingRight":0,"width":"100%","borderRadius":0,"borderSize":0,"scrollEnabled":true,"backgroundColor":[],"backgroundColorDirection":"vertical","backgroundColorRatios":[],"insetBorder":false,"height":"100%","minHeight":0,"backgroundOpacity":1,"minWidth":0,"class":"WebFrame","data":{"name":"WebFrame59300"},"shadow":false,"toolTipHorizontalAlign":"center","paddingBottom":0},{"paddingTop":0,"propagateClick":false,"id":"WebFrame_9F84E883_86D3_8A92_41E0_8B0ABFD3D459","paddingLeft":0,"paddingRight":0,"width":"100%","borderRadius":0,"borderSize":0,"scrollEnabled":true,"backgroundColor":[],"backgroundColorDirection":"vertical","backgroundColorRatios":[],"insetBorder":false,"height":"100%","minHeight":0,"backgroundOpacity":1,"minWidth":0,"class":"WebFrame","data":{"name":"WebFrame59301"},"shadow":false,"toolTipHorizontalAlign":"center","paddingBottom":0},{"paddingTop":0,"propagateClick":false,"id":"WebFrame_9F850883_86D3_8A92_41CA_91D8379BBB64","paddingLeft":0,"paddingRight":0,"width":"100%","borderRadius":0,"borderSize":0,"scrollEnabled":true,"backgroundColor":[],"backgroundColorDirection":"vertical","backgroundColorRatios":[],"insetBorder":false,"height":"100%","minHeight":0,"backgroundOpacity":1,"minWidth":0,"class":"WebFrame","data":{"name":"WebFrame59304"},"shadow":false,"toolTipHorizontalAlign":"center","paddingBottom":0},{"id":"sequence_8A01D08B_85D1_BA93_41D1_FF706240DB56","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"paddingTop":0,"propagateClick":false,"id":"WebFrame_9F852883_86D3_8A92_41C6_BEF1E4C4EDC5","paddingLeft":0,"paddingRight":0,"width":"100%","borderRadius":0,"borderSize":0,"scrollEnabled":true,"backgroundColor":[],"backgroundColorDirection":"vertical","backgroundColorRatios":[],"insetBorder":false,"height":"100%","minHeight":0,"backgroundOpacity":1,"minWidth":0,"class":"WebFrame","data":{"name":"WebFrame59303"},"shadow":false,"toolTipHorizontalAlign":"center","paddingBottom":0},{"paddingTop":0,"propagateClick":false,"id":"WebFrame_9F84C883_86D3_8A92_41C6_3AC32BDE4718","paddingLeft":0,"paddingRight":0,"width":"100%","borderRadius":0,"borderSize":0,"scrollEnabled":true,"backgroundColor":[],"backgroundColorDirection":"vertical","backgroundColorRatios":[],"insetBorder":false,"height":"100%","minHeight":0,"backgroundOpacity":1,"minWidth":0,"class":"WebFrame","data":{"name":"WebFrame59302"},"shadow":false,"toolTipHorizontalAlign":"center","paddingBottom":0}],"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Thu Jul 8 2021
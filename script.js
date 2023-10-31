class AutoDuoSuper {
  ["version"] = "2.0.2";
  ["isAuto"] = false;
  ["isAutoRunning"] = false;
  ["isSafeMode"] = getDataSession("isSafeMode") || false;
  ["isLegendMode"] = false;
  ['nextTime'] = 0x118;
  ["goChallengeTime"] = 0x320;
  ["safeDelayTime"] = 0x32;
  ["safeDelayTimeTemp"] = 0x12c;
  ['genealogy'] = [];
  ["isEnterKey"] = false;
  ["startTime"] = null;
  ["isShowUI"] = true;
  ['exp'] = getDataSession("exp") || 0x0;
  ["totalTime"] = getDataSession("time") || 0x0;
  ["isKeyVip"] = false;
  ["vipSpeed"] = null;
  ['generalData'] = getDataSession("generalData");
  ["authenData"] = getDataSession("authenData");
  ["apiUrl"] = 'https://api.nghiane.online/autoduo/super/data/';
  ["homePage"] = "/learn";
  ['practicePath'] = "/practice";
  ['practiceHubPath'] = '/practice-hub';
  ['listeningPacticePath'] = "/practice-hub/listening-practice";
  ["dataWrapper"] = "._863KE";
  ["nativeTextareaValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
  ["nativeInputValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  ["setup"] = function () {
    this.createSignature();
    this.createBtn();
    this.createKeyComponent();
    this.createStatistics();
    this.createStyle();
    this.createFunctions();
    this.createContainer();
    this.renderTime();
    if (this.authenData) {
      this.setAuthen(this.authenData);
    } else {
      this.handleAuthen();
    }
    if (this.generalData) {
      this.setGeneral(this.generalData);
    } else {
      this.handleGetGeneral();
    }
    if (getDataSession("isAuto")) {
      this.start();
    }
  };
  ['createSignature'] = function () {
    const _0x2fe665 = document.createElement("div");
    _0x2fe665.className = 'signature-listening';
    _0x2fe665.innerHTML = "AutoDuo Super - Dev X\xE1\xBA\xA5u X\xC3\xAD<br />LH Zalo: 0838513245";
    document.body.appendChild(_0x2fe665);
  };
  ["createBtn"] = function () {
    this.autoBtn = document.createElement('button');
    Object.assign(this.autoBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S _108yV auto-listening",
      'innerText': "Start Auto",
      'onclick': () => {
        if (this.isAuto) {
          this.stop();
        } else {
          this.start();
        }
      }
    });
    this.dropKeyBtn = document.createElement("button");
    Object.assign(this.dropKeyBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S dropkey-btn-listening",
      'innerText': "G\xE1\xBB  KEY"
    });
    this.dropKeyBtn.addEventListener('click', () => {
      const _0x46a29d = window.confirm("B\xE1\xBA\xA1n c\xC3\xB3 th\xE1\xBB\xB1c s\xE1\xBB\xB1 mu\xE1\xBB\u2018n g\xE1\xBB\xA1 Key hi\xE1\xBB\u2021n t\xE1\xBA\xA1i kh\xC3\xB4ng? (Sau khi g\xE1\xBB\xA1 s\xE1\xBA\xBD t\xE1\xBB\xB1 \xC4\u2018\xE1\xBB\u2122ng l\xC3 m m\xE1\xBB\u203Ai trang \xC4\u2018\xE1\xBB\u0192 c\xE1\xBA\xADp nh\xE1\xBA\xADt)");
      if (_0x46a29d) {
        setDataLocal("key", null);
        removeDataSession();
        this.handleReload();
      }
    });
    this.showHideBtn = document.createElement("button");
    Object.assign(this.showHideBtn, {
      'className': "show-hide-listening",
      'style': "--data-version: 'V" + this.version + "'",
      'innerHTML': "<i></i>"
    });
    this.showHideBtn.addEventListener("click", () => {
      this.isShowUI = !this.isShowUI;
      if (this.isShowUI) {
        this.showHideBtn.classList.remove("hide");
      } else {
        this.showHideBtn.classList.add("hide");
      }
      if (this.isEnterKey) {
        if (this.isShowUI) {
          document.body.appendChild(this.autoContainer);
        } else {
          document.body.removeChild(this.autoContainer);
        }
      } else if (this.isShowUI) {
        document.body.appendChild(this.keyContainer);
      } else {
        document.body.removeChild(this.keyContainer);
      }
    });
    document.body.append(this.showHideBtn);
  };
  ['createStatistics'] = function () {
    this.statistic = document.createElement("div");
    this.keyTypeElm = document.createElement('p');
    this.keyExpiredElm = document.createElement('p');
    this.expElm = document.createElement('p');
    this.dateElm = document.createElement('p');
    this.dateElm = document.createElement('p');
    this.keyTypeElm.className = "key-type-listening";
    this.keyExpiredElm.className = 'key-expired-listening';
    this.expElm.id = "total-exp-listening";
    this.expElm.innerText = this.exp;
    this.statistic.className = "statistic-listening";
    this.dateElm.className = "time-listening";
    this.statistic.append(this.keyTypeElm, this.keyExpiredElm, this.dateElm, this.expElm);
  };
  ["createFunctions"] = function () {
    this.safeModeWrapper = document.createElement("div");
    this.safeModeWrapper.className = 'safemode-wrapper';
    this.autoduoCreateSwitch("- SAFE MODE (ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 an to\xC3 n):\nKhi b\xE1\xBA\xADt ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 n\xC3 y, t\xE1\xBB\u2018c \xC4\u2018\xE1\xBB\u2122 ho\xC3 n th\xC3 nh b\xC3 i h\xE1\xBB\x8Dc s\xE1\xBA\xBD ch\xE1\xBA\xADm r\xC3\xA3i h\xC6\xA1n. B\xC3\xB9 l\xE1\xBA\xA1i, th\xE1\xBB\x9Di gian v\xC3  l\xC6\xB0\xE1\xBB\xA3ng kinh nghi\xE1\xBB\u2021m s\xE1\xBA\xBD \xC4\u2018\xC6\xB0\xE1\xBB\xA3c t\xE1\xBB\xB1 nhi\xC3\xAAn nh\xE1\xBA\xA5t, gi\xE1\xBA\xA3m thi\xE1\xBB\u0192u c\xC3\xA1c r\xE1\xBB\xA7i ro v\xE1\xBB\x81 REPORT v\xC3  BAN t\xC3 i kho\xE1\xBA\xA3n!", this.safeModeWrapper, this.isSafeMode, _0x5d6c0d => {
      if (this.isAuto) {
        return;
      }
      _0x5d6c0d(this.setSafeMode(!this.isSafeMode));
    });
    this.legendModeWrapper = document.createElement("div");
    this.legendModeWrapper.className = "legendmode-wrapper";
    this.autoduoCreateSwitch("- LEGEND MODE (ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 l\xC3 m huy\xE1\xBB\x81n tho\xE1\xBA\xA1i):\nKhi \xC4\u2018\xC6\xB0\xE1\xBB\xA3c b\xE1\xBA\xADt, h\xE1\xBB\u2021 th\xE1\xBB\u2018ng kh\xC3\xB4ng l\xC3 m l\xE1\xBA\xB7p l\xE1\xBA\xA1i c\xC3\xA1c b\xC3 i luy\xE1\xBB\u2021n t\xE1\xBA\xADp nh\xC6\xB0 ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 th\xC3\xB4ng th\xC6\xB0\xE1\xBB\x9Dng m\xC3  s\xE1\xBA\xBD ch\xE1\xBB\u2030 l\xC3 m c\xC3\xA1c b\xC3 i c\xE1\xBB\xA5 th\xE1\xBB\u0192 m\xC3  ng\xC6\xB0\xE1\xBB\x9Di d\xC3\xB9ng ch\xE1\xBB\x8Dn. Ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 n\xC3 y \xC4\u2018\xC6\xB0\xE1\xBB\xA3c s\xE1\xBB\xAD d\xE1\xBB\xA5ng \xC4\u2018\xE1\xBB\u0192 l\xC3 m c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp huy\xE1\xBB\x81n tho\xE1\xBA\xA1i v\xC3  t\xE1\xBA\xA5t c\xE1\xBA\xA3 c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp t\xC6\xB0\xC6\xA1ng t\xE1\xBB\xB1 kh\xC3\xA1c!\n\n - L\xC6\xB0u \xC3\xBD: C\xE1\xBA\xA7n c\xC3\xB3 Key Vip \xC4\u2018\xE1\xBB\u0192 s\xE1\xBB\xAD d\xE1\xBB\xA5ng t\xC3\xADnh n\xC4\u0192ng n\xC3 y!", this.legendModeWrapper, this.isLegendMode, _0x3d650b => {
      if (this.isAuto && !this.isLegendMode) {
        return;
      }
      if (!this.isKeyVip) {
        alert("Xin l\xE1\xBB\u2014i, t\xC3\xADnh n\xC4\u0192ng n\xC3 y ch\xE1\xBB\u2030 d\xC3 nh cho Key VIP, li\xC3\xAAn h\xE1\xBB\u2021 ADMIN \xC4\u2018\xE1\xBB\u0192 bi\xE1\xBA\xBFt th\xC3\xAAm chi ti\xE1\xBA\xBFt!!");
        return;
      }
      if (!this.isLegendMode) {
        this.startLegend();
      } else {
        this.stopLegend();
      }
      _0x3d650b(this.isLegendMode);
    });
    this.functionWrapper = document.createElement('div');
    this.functionWrapper.className = "function-wrapper-listening";
    this.functionWrapper.append(this.safeModeWrapper, this.legendModeWrapper);
  };
  ["createContainer"] = function () {
    this.keyContainer = document.createElement("div");
    this.keyContainer.className = 'key-container-listening';
    this.keyContainer.append(this.keyInput, this.keyBtn, this.guideBtn, this.getLinkBtn, this.guideGetLinkBtn, this.keyVipBtn);
    document.body.appendChild(this.keyContainer);
    this.autoContainer = document.createElement("div");
    this.autoContainer.className = "auto-container-listening";
    this.autoContainer.append(this.statistic, this.functionWrapper, this.autoBtn, this.dropKeyBtn);
    this.overlayContainer = document.createElement("div");
    this.overlayContainer.className = 'overlay-listening';
  };
  ["createKeyComponent"] = function () {
    this.keyBtn = document.createElement('button');
    Object.assign(this.keyBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S _108yV key-btn-listening",
      'innerText': "Nh\xE1\xBA\xADp Key"
    });
    this.keyInput = document.createElement("input");
    Object.assign(this.keyInput, {
      'className': "key-input-listening",
      'placeholder': "Nh\xE1\xBA\xADp Key V\xC3 o \xC4\x90\xC3\xA2y..."
    });
    this.btnLoading = document.createElement("div");
    Object.assign(this.btnLoading, {
      'className': "loading-listening",
      'innerHTML': "<div class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\" style=\"transition-duration: 250ms;\"><div class=\"_2buOS _2Amjo\"></div><div class=\"_3AW2F _2Amjo\"></div><div class=\"Utckm _2Amjo\"></div></div>"
    });
    this.guideBtn = document.createElement('div');
    Object.assign(this.guideBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S _1SeBB guide-btn-listening",
      'innerText': "H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN"
    });
    this.getLinkBtn = document.createElement('a');
    Object.assign(this.getLinkBtn, {
      'className': "_1N-oo _36Vd3 _16r-S _2zs7L getlink-btn-listening",
      'innerText': "LINK L\xE1\xBA\xA4Y KEY",
      'target': "_blank"
    });
    this.guideGetLinkBtn = document.createElement('a');
    Object.assign(this.guideGetLinkBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S guide-getlink-btn-listening",
      'innerText': "H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN L\xE1\xBA\xA4Y KEY",
      'target': "_blank"
    });
    this.keyVipBtn = document.createElement('a');
    Object.assign(this.keyVipBtn, {
      'className': "_1N-oo _36Vd3 _16r-S _2zs7L key-vip-btn-listening",
      'innerText': "\xC4\x90\xC4\u201ANG K\xC3\x9D KEY VIP",
      'target': "_blank"
    });
    this.keyInput.onkeydown = _0xa28631 => _0xa28631.stopPropagation();
    this.btnLoading.onclick = _0x27ce8f => _0x27ce8f.stopPropagation();
    this.keyBtn.addEventListener("click", () => {
      const _0x13b043 = this.keyInput.value;
      if (_0x13b043) {
        this.handleAuthen(_0x13b043, true, 0x3e8);
      }
    });
    this.guideBtn.addEventListener("click", this.showGuide);
  };
  ["handleAuthen"] = function (_0x279edb, _0x381089 = false, _0x36f24f = 0x0) {
    if (!_0x279edb) {
      _0x279edb = getDataLocal("key");
      if (!_0x279edb) {
        return;
      }
    }
    this.showKeyBtnLoading(true);
    const _0x3d779b = new FormData();
    _0x3d779b.append("key", _0x279edb);
    setTimeout(() => {
      fetch(this.apiUrl, {
        'method': "post",
        'body': _0x3d779b
      }).then(_0xcac8e9 => _0xcac8e9?.["json"]()).then(_0x508c2d => {
        switch (_0x508c2d?.["code"]) {
          case 0xc8:
            const _0x4cc2b2 = _0x508c2d.data;
            this.setAuthen(_0x4cc2b2);
            setDataSession("authenData", _0x4cc2b2);
            if (_0x381089) {
              setDataLocal("key", _0x279edb);
            }
            break;
          case 0x190:
            if (_0x381089) {
              alert("Dev X\xE1\xBA\xA5u Said: Key kh\xC3\xB4ng \xC4\u2018\xC3\xBAng, \xC4\u2018\xC3\xA3 h\xE1\xBA\xBFt h\xE1\xBA\xA1n ho\xE1\xBA\xB7c \xC4\u2018\xC3\xA3 h\xE1\xBA\xBFt l\xC6\xB0\xE1\xBB\xA3t s\xE1\xBB\xAD d\xE1\xBB\xA5ng, vui l\xC3\xB2ng th\xE1\xBB\xAD l\xE1\xBA\xA1i!");
            }
            break;
          case 0x193:
            alert("\xC4\x90\xE1\xBB\u2039a ch\xE1\xBB\u2030 IP n\xC3 y \xC4\u2018\xC3\xA3 b\xE1\xBB\u2039 ch\xE1\xBA\xB7n! \xC4\x90\xE1\xBB\u0192 bi\xE1\xBA\xBFt th\xC3\xAAm chi ti\xE1\xBA\xBFt, vui l\xC3\xB2ng li\xC3\xAAn h\xE1\xBB\u2021 Admin!");
            break;
          default:
            alert("C\xC3\xB3 l\xE1\xBB\u2014i x\xE1\xBA\xA3y ra khi x\xC3\xA1c th\xE1\xBB\xB1c, vui l\xC3\xB2ng th\xE1\xBB\xAD l\xE1\xBA\xA1i sau!");
            break;
        }
      })['finally'](() => {
        this.showKeyBtnLoading(false);
      });
    }, _0x36f24f);
  };
  ['setAuthen'] = function (_0x114da2) {
    const _0x443799 = this.autoduoDecode(_0x114da2);
    if (_0x443799 === null) {
      return this.autoduoError("L\xE1\xBB\u2014i d\xE1\xBB\xAF li\xE1\xBB\u2021u kh\xC3\xB4ng h\xE1\xBB\xA3p l\xE1\xBB\u2021!");
    }
    const {
      keyData: _0x698f88,
      genealogy: _0x10d665
    } = _0x443799;
    this.handleReadyAuto(_0x10d665, _0x698f88);
  };
  ["handleGetGeneral"] = function () {
    fetch(this.apiUrl + "?author=alinhdx").then(_0x560d19 => _0x560d19?.["json"]()).then(_0x226fe4 => {
      if (_0x226fe4?.['code'] === 0xc8) {
        const _0x2ab3b0 = _0x226fe4.data;
        this.setGeneral(_0x2ab3b0);
        setDataSession('generalData', _0x2ab3b0);
      }
    });
  };
  ['setGeneral'] = function (_0x3c8310) {
    const _0x5c4776 = this.autoduoDecode(_0x3c8310);
    if (_0x5c4776 === null) {
      return this.autoduoError("L\xE1\xBB\u2014i d\xE1\xBB\xAF li\xE1\xBB\u2021u kh\xC3\xB4ng h\xE1\xBB\xA3p l\xE1\xBB\u2021!");
    }
    const {
      version: _0xbf33b9,
      keyUrl: _0x4a78eb,
      guideGetKeyUrl: _0xcbc07b,
      keyVipUrl: _0x5264c9,
      sd: _0x5829c3,
      vsd: _0x5457f4
    } = _0x5c4776;
    this.getLinkBtn.href = _0x4a78eb;
    this.guideGetLinkBtn.href = _0xcbc07b;
    this.keyVipBtn.href = _0x5264c9;
    this.handleUpdateSpeed(_0x5829c3, _0x5457f4);
    this.handleVersion(_0xbf33b9);
  };
  ["handleUpdateSpeed"] = function (_0xbb26fc, _0xd5b491) {
    if (_0xbb26fc && _0xd5b491) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = this.isKeyVip ? _0xd5b491 : _0xbb26fc;
      if (!this.isKeyVip) {
        this.vipSpeed = _0xd5b491;
      }
      if (this.isSafeMode) {
        this.safeDelayTime = this.safeDelayTimeTemp;
      }
    } else if (this.vipSpeed !== null) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = this.vipSpeed;
      if (this.isSafeMode) {
        this.safeDelayTime = this.safeDelayTimeTemp;
      }
    }
  };
  ['handleVersion'] = function (_0x1e6846) {
    if (this.version !== _0x1e6846) {
      this.showHideBtn.classList.add("older");
      this.autoBtn.onclick = _0x48d240;
      setTimeout(_0x48d240, 0x3e8);
      function _0x48d240() {
        alert("Phi\xC3\xAAn b\xE1\xBA\xA3n AutoDuo Super hi\xE1\xBB\u2021n t\xE1\xBA\xA1i \xC4\u2018\xC3\xA3 c\xC5\xA9, h\xC3\xA3y t\xE1\xBA\xA3i v\xC3  c\xC3 i \xC4\u2018\xE1\xBA\xB7t phi\xC3\xAAn b\xE1\xBA\xA3n V" + _0x1e6846 + " trong nh\xC3\xB3m Zalo \xC4\u2018\xE1\xBB\u0192 c\xE1\xBA\xADp nh\xE1\xBA\xADt c\xC3\xA1c t\xC3\xADnh n\xC4\u0192ng m\xE1\xBB\u203Ai v\xC3  c\xC3\xB3 th\xE1\xBB\u0192 s\xE1\xBB\xAD d\xE1\xBB\xA5ng auto!");
      }
    }
  };
  ["handleKeyMarkup"] = function (_0x31aecf, _0x559791) {
    let _0x2747ec;
    let _0x3ce18e;
    switch (_0x31aecf) {
      case "vip":
        _0x2747ec = "<b class='vip-type-listening'>Key VIP</b>";
        _0x3ce18e = "<b class='vip-expired-listening'>" + _0x559791 + "</b>";
        this.autoBtn.classList.add("vip");
        this.showHideBtn.classList.add("vip");
        this.isKeyVip = true;
        this.handleUpdateSpeed();
        break;
      default:
        _0x2747ec = "<span style='color: green'>Key ph\xE1\xBB\u2022 th\xC3\xB4ng</span>";
        _0x3ce18e = "<span style='color: green'>" + _0x559791 + "</span>";
        this.legendModeWrapper.classList.add("unavailable");
        break;
    }
    this.keyTypeElm.innerHTML = _0x2747ec;
    this.keyExpiredElm.innerHTML = _0x3ce18e;
  };
  ['handleReadyAuto'] = function (_0x1d131c, _0x2b123e) {
    const {
      type: _0xd14ee9,
      expiredAt: _0x3f66da
    } = _0x2b123e;
    this.handleKeyMarkup(_0xd14ee9, _0x3f66da);
    this.genealogy = _0x1d131c;
    this.isEnterKey = true;
    document.body.removeChild(this.keyContainer);
    document.body.append(this.autoContainer);
  };
  ['handleReload'] = function () {
    if (this.isAuto) {
      this.stop();
    }
    const _0x56ed46 = window.location.pathname;
    switch (_0x56ed46) {
      case this.listeningPacticePath:
        const _0x5a3543 = document.querySelector("[data-test=\"quit-button\"]");
        if (_0x5a3543) {
          _0x5a3543.click();
        }
        setTimeout(() => {
          const _0x36cc9d = document.querySelector("[data-test=\"notification-button\"]");
          if (_0x36cc9d) {
            _0x36cc9d.click();
          }
        }, this.nextTime + 0x1f4);
      case this.practiceHubPath:
        setTimeout(() => {
          window.location.reload();
        }, this.nextTime + 0x5dc);
        break;
      default:
        window.location.reload();
        break;
    }
  };
  ["start"] = function () {
    if (this.isAuto || this.isAutoRunning || this.isLegendMode) {
      return;
    }
    this.safeModeWrapper.classList.add("disable");
    this.legendModeWrapper.classList.add("disable");
    document.body.appendChild(this.overlayContainer);
    this.isAuto = true;
    this.autoBtn.classList.add("NAidc", "running");
    this.autoBtn.innerText = "Stop Auto";
    setDataSession('isAuto', this.isAuto);
    this.startTime = Date.now();
    this.handleLocation();
  };
  ["stop"] = function () {
    if (!this.isAuto || this.isLegendMode) {
      return;
    }
    this.safeModeWrapper.classList.remove("disable");
    this.legendModeWrapper.classList.remove("disable");
    document.body.removeChild(this.overlayContainer);
    this.isAuto = false;
    this.autoBtn.classList.remove('NAidc', "running");
    this.autoBtn.innerText = "Start Auto";
    setDataSession("isAuto", this.isAuto);
  };
  ["startLegend"] = function () {
    if (this.isLegendMode || this.isAutoRunning || this.isAuto) {
      return;
    }
    this.safeModeWrapper.classList.add('disable');
    this.autoBtn.classList.add('disable');
    this.isAuto = true;
    this.isLegendMode = true;
    this.handleLegend();
  };
  ["stopLegend"] = function () {
    if (!this.isLegendMode) {
      return;
    }
    this.safeModeWrapper.classList.remove("disable");
    this.autoBtn.classList.remove('disable');
    if (document.body.contains(this.overlayContainer)) {
      document.body.removeChild(this.overlayContainer);
    }
    this.isAuto = false;
    this.isLegendMode = false;
  };
  ["handleLegend"] = function () {
    if (!this.isLegendMode) {
      return;
    }
    const _0x183459 = $("[data-test=\"challenge-header\"]");
    if (_0x183459) {
      document.body.appendChild(this.overlayContainer);
      this.startTime = Date.now();
      this.doChallenge();
      return;
    }
    setTimeout(this.handleLegend.bind(this), 0x7d0);
  };
  ["handleLocation"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x5e8a7d = window.location.pathname;
    switch (_0x5e8a7d) {
      case this.practiceHubPath:
        this.goPracticeHubChallenge();
        break;
      case this.listeningPacticePath:
        this.handlePracticeHubChallenge();
        break;
      case this.homePage:
        this.goPracticeChallenge();
        break;
      case this.practicePath:
        this.handlePracticeChallenge();
        break;
      default:
        this.autoduoError("V\xE1\xBB\u2039 tr\xC3\xAD kh\xC3\xB4ng th\xC3\xADch h\xE1\xBB\xA3p: ch\xE1\xBB\u2030 b\xE1\xBA\xADt auto khi \xC4\u2018ang \xE1\xBB\u0178 trang ch\xE1\xBB\xA7 ho\xE1\xBA\xB7c trang luy\xE1\xBB\u2021n t\xE1\xBA\xADp (c\xC3\xB3 h\xC3\xACnh qu\xE1\xBA\xA3 t\xE1\xBA\xA1) c\xE1\xBB\xA7a Duolingo Super!\n- N\xE1\xBA\xBFu b\xE1\xBA\xA1n mu\xE1\xBB\u2018n auto l\xC3 m c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp huy\xE1\xBB\x81n tho\xE1\xBA\xA1i ho\xE1\xBA\xB7c m\xE1\xBB\u0178 kh\xC3\xB3a c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp kh\xC3\xA1c, vui l\xC3\xB2ng b\xE1\xBA\xADt ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 huy\xE1\xBB\x81n tho\xE1\xBA\xA1i (Legend Mode)");
        break;
    }
  };
  ["goPracticeHubChallenge"] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x1c0138 = $("[class=\"_3ekD2\"]");
    const _0x2b0c10 = _0x1c0138.querySelector(".vJj1P");
    if (!_0x2b0c10) {
      return this.autoduoError("L\xE1\xBB\u2014i t\xC3\xACm n\xC3\xBAt th\xE1\xBB\xAD th\xC3\xA1ch");
    }
    _0x2b0c10.click();
    setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
  };
  ['goPracticeChallenge'] = function () {
    window.location.href = this.practicePath;
  };
  ['handlePracticeHubChallenge'] = function () {
    if (window.location.pathname === this.practiceHubPath) {
      this.goPracticeHubChallenge();
      return;
    }
    const _0x136830 = $("[data-test=\"player-next\"][aria-disabled=\"false\"]");
    if (_0x136830) {
      this.nextQuestion();
      return;
    }
    const _0x539084 = $(this.dataWrapper);
    if (_0x539084) {
      this.doChallenge();
      return;
    }
    setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
  };
  ["handlePracticeChallenge"] = function () {
    const _0x58f1ba = $("[data-test=\"player-next\"][aria-disabled=\"false\"]");
    if (_0x58f1ba) {
      this.nextQuestion();
      return;
    }
    const _0x151355 = $(this.dataWrapper);
    if (_0x151355) {
      this.doChallenge();
      return;
    }
    setTimeout(this.handlePracticeChallenge.bind(this), 0x3e8);
  };
  ["doChallenge"] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x6625f2 = $('.FQpeZ');
    if (!_0x6625f2) {
      return this.autoduoError("Th\xE1\xBB\xAD th\xC3\xA1ch kh\xC3\xB4ng x\xC3\xA1c \xC4\u2018\xE1\xBB\u2039nh!!");
    }
    const _0x45514e = _0x6625f2.dataset.test?.["slice"](0xa);
    switch (_0x45514e) {
      case "challenge-translate":
      case "challenge-listenTap":
      case 'challenge-listen':
        this.handleChallengeTranslate(_0x45514e);
        break;
      case 'challenge-gapFill':
      case "challenge-listenIsolation":
      case 'challenge-assist':
      case "challenge-selectTranscription":
      case "challenge-characterIntro":
      case "challenge-characterSelect":
      case 'challenge-selectPronunciation':
      case "challenge-dialogue":
      case 'challenge-readComprehension':
      case "challenge-listenComprehension":
      case "challenge-select":
        this.handleChallengeChoice();
        break;
      case "challenge-characterMatch":
      case "challenge-match":
        this.handleChallengeMatch(_0x45514e);
        break;
      case "challenge-listenComplete":
      case "challenge-name":
        this.handleChallengeTextInput(_0x45514e);
        break;
      case "challenge-listenMatch":
        this.handleChallengeListenMatch();
        break;
      case "challenge-completeReverseTranslation":
        this.handleChallengeCompleteReverseTranslation(_0x45514e);
        break;
      case "challenge-partialReverseTranslate":
        this.handleChallengePartialReverseTranslate();
        break;
      case "challenge-tapComplete":
        this.handleChallengeTapComplete();
        break;
      case "challenge-speak":
        this.handleSkipChallenge();
        break;
      default:
        return this.autoduoError("No handle ~.~: " + _0x45514e);
    }
    this.setAutoRunning(true);
  };
  ["handleChallengeTranslate"] = function (_0x22a770) {
    if (this.isAuto === false) {
      return;
    }
    let _0x59abc8 = null;
    switch (_0x22a770) {
      case "challenge-listenTap":
      case 'challenge-translate':
        _0x59abc8 = this.getData('correctTokens');
        if (!_0x59abc8?.["length"]) {
          _0x59abc8 = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.["split"](" ");
        }
        break;
      case 'challenge-listen':
        _0x59abc8 = this.getData("prompt")?.["split"](" ");
        break;
      case "challenge-completeReverseTranslation":
        _0x59abc8 = this.getData(['metadata', 'translation']).split(" ");
        break;
    }
    if (_0x59abc8 === null) {
      return this.autoduoError("Data is not found!");
    }
    const _0x1a5b27 = $("textarea[data-test=\"challenge-translate-input\"]");
    if (_0x1a5b27) {
      const _0x1ba696 = new Event("input", {
        'bubbles': true
      });
      let _0x115fff = '';
      const _0x262074 = () => {
        setTimeout(() => {
          if (_0x59abc8.length === 0x0) {
            this.nextQuestion();
            this.setAutoRunning(false);
            return;
          }
          _0x115fff += " " + _0x59abc8.shift();
          this.nativeTextareaValueSetter.call(_0x1a5b27, _0x115fff);
          _0x1a5b27.dispatchEvent(_0x1ba696);
          _0x262074();
        }, this.safeDelayTime);
      };
      _0x262074();
      return;
    }
    const _0x5dc4d8 = Array.from($$("[class=\"_3Lqi-\"] [data-test=\"challenge-tap-token-text\"]"));
    const _0x101c8b = () => {
      setTimeout(() => {
        if (_0x59abc8.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        const _0x1cb7cb = _0x59abc8.shift();
        const _0x4537c3 = _0x5dc4d8.findIndex(_0x1ce3f7 => _0x1ce3f7.innerText === _0x1cb7cb);
        if (_0x4537c3 === -0x1) {
          return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y l\xE1\xBB\xB1a ch\xE1\xBB\x8Dn");
        }
        _0x5dc4d8[_0x4537c3].click();
        _0x5dc4d8.splice(_0x4537c3, 0x1);
        _0x101c8b();
      }, this.safeDelayTime);
    };
    _0x101c8b();
  };
  ["handleChallengeListenMatch"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x49d16c = Array.from($$("[class=\"_1deIS\"] > button"));
    const _0x3b30cb = _0x49d16c.slice(_0x49d16c.length / 0x2);
    let _0xb3e03e = null;
    const _0x51b0a6 = (_0x1803fe, _0x34484c) => {
      setTimeout(() => {
        if (_0x34484c.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        if (_0xb3e03e === null) {
          const _0x425f3a = _0x1803fe.shift();
          _0xb3e03e = _0x425f3a.dataset.test;
          _0x425f3a.click();
        } else {
          const _0x1c7097 = _0x34484c.findIndex(_0x18093e => _0x18093e.dataset.test === _0xb3e03e);
          if (_0x1c7097 === -0x1) {
            return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm \xC4\u2018\xC6\xB0\xE1\xBB\xA3c k\xE1\xBA\xBFt qu\xE1\xBA\xA3 t\xC6\xB0\xC6\xA1ng \xE1\xBB\xA9ng!");
          }
          _0x34484c[_0x1c7097].click();
          _0x34484c.splice(_0x1c7097, 0x1);
          _0xb3e03e = null;
        }
        _0x51b0a6(_0x1803fe, _0x34484c);
      }, this.safeDelayTime);
    };
    _0x51b0a6(_0x49d16c, _0x3b30cb);
  };
  ["handleChallengeMatch"] = function (_0x105fbe) {
    if (!this.isAuto) {
      return;
    }
    const _0x2aac68 = Array.from($$("[data-test=\"challenge-tap-token-text\"]"));
    const _0x1d85f6 = _0x2aac68.splice(_0x2aac68.length / 0x2);
    let _0x31f742 = null;
    switch (_0x105fbe) {
      case "challenge-characterMatch":
        _0x31f742 = this.getData('pairs')?.["reduce"]((_0x593216, _0x508383) => {
          const {
            transliteration: _0x300752,
            character: _0x4d5c5e
          } = _0x508383;
          _0x593216[_0x300752] = _0x4d5c5e;
          return _0x593216;
        }, {});
        break;
      case "challenge-match":
        _0x31f742 = this.getData('pairs')?.["reduce"]((_0x36c03a, _0x5d0fee) => {
          const {
            fromToken: _0x5ebb1d,
            learningToken: _0x4d7574
          } = _0x5d0fee;
          _0x36c03a[_0x5ebb1d] = _0x4d7574;
          return _0x36c03a;
        }, {});
        break;
    }
    if (!_0x31f742) {
      return this.autoduoError("Kh\xC3\xB4ng th\xE1\xBB\u0192 t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
    }
    let _0x1ae379 = null;
    const _0x2b99c1 = () => {
      setTimeout(() => {
        if (_0x1d85f6.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        if (_0x1ae379 === null) {
          const _0xcff4ac = _0x2aac68.shift();
          _0xcff4ac.click();
          _0x1ae379 = _0x31f742[_0xcff4ac.innerText];
        } else {
          const _0x2e3d6e = _0x1d85f6.findIndex(_0x11ffa5 => _0x11ffa5.innerText === _0x1ae379);
          if (_0x2e3d6e === -0x1) {
            return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y \xC4\u2018\xC3\xA1p \xC3\xA1n th\xC3\xADch h\xE1\xBB\xA3p!");
          }
          _0x1d85f6[_0x2e3d6e].click();
          _0x1d85f6.splice(_0x2e3d6e, 0x1);
          _0x1ae379 = null;
        }
        _0x2b99c1();
      }, this.safeDelayTime);
    };
    _0x2b99c1();
  };
  ["handleChallengeChoice"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x32540a = $$("[data-test=\"challenge-choice\"]");
    const _0x4c879d = this.getData("correctIndex");
    if (_0x4c879d === null) {
      return this.autoduoError("Data is not found!");
    }
    setTimeout(() => {
      _0x32540a[_0x4c879d].click();
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ['handleChallengeTextInput'] = function (_0x2e4eb2) {
    if (!this.isAuto) {
      return;
    }
    let _0x48375e = null;
    switch (_0x2e4eb2) {
      case 'challenge-listenComplete':
      case "challenge-completeReverseTranslation":
        _0x48375e = $("[class=\"caPDQ\"]")?.["innerHTML"]?.["replaceAll"]('_', '');
        break;
      case "challenge-name":
        _0x48375e = this.getData("correctSolutions")[0x0];
        break;
    }
    if (!_0x48375e) {
      return this.autoduoError("Data is not found!");
    }
    const _0x30be05 = $("[data-test=\"challenge-text-input\"]");
    const _0x356542 = new Event("input", {
      'bubbles': true
    });
    setTimeout(() => {
      this.nativeInputValueSetter.call(_0x30be05, _0x48375e);
      _0x30be05.dispatchEvent(_0x356542);
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ['handleChallengePartialReverseTranslate'] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x3e445d = $("[class=\"_31xxw _2eX9t _1vqO5\"]")?.["innerHTML"];
    const _0x22fa20 = $("span[contenteditable=\"true\"]");
    const _0x5ea014 = new Event('input', {
      'bubbles': true
    });
    setTimeout(() => {
      _0x22fa20.innerText = _0x3e445d;
      _0x22fa20.dispatchEvent(_0x5ea014);
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ["handleChallengeCompleteReverseTranslation"] = function (_0xfd866f) {
    const _0x1c5e65 = $("textarea[data-test=\"challenge-translate-input\"]");
    if (_0x1c5e65) {
      this.handleChallengeTranslate(_0xfd866f);
      return;
    }
    this.handleChallengeTextInput(_0xfd866f);
  };
  ['handleChallengeTapComplete'] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x5cb431 = $$("[data-test=\"word-bank\"] [data-test=\"challenge-tap-token-text\"]");
    const _0x44c0b0 = this.getData("correctIndices");
    if (!_0x44c0b0) {
      return this.autoduoError("Data is not found!");
    }
    const _0x4ae307 = () => {
      setTimeout(() => {
        if (_0x44c0b0.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        const _0x4e139f = _0x44c0b0.shift();
        _0x5cb431[_0x4e139f].click();
        _0x4ae307();
      }, this.safeDelayTime);
    };
    _0x4ae307();
  };
  ["handleSkipChallenge"] = function () {
    setTimeout(() => {
      const _0x1a63e7 = $("[data-test=\"player-skip\"]");
      if (!_0x1a63e7) {
        return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y skip button!");
      }
      _0x1a63e7.click();
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ["nextQuestion"] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x4eb42f = $("[class=\"_863KE\"]");
    if (_0x4eb42f) {
      const _0x35db1e = this.getExp(_0x4eb42f);
      if (_0x35db1e !== undefined) {
        this.exp += _0x35db1e;
        this.expElm.innerText = this.exp;
        const _0x839d54 = Date.now();
        this.totalTime += _0x839d54 - this.startTime;
        this.startTime = _0x839d54;
        this.renderTime();
        setDataSession("exp", this.exp);
        setDataSession("time", this.totalTime);
        if (this.isLegendMode) {
          document.body.removeChild(this.overlayContainer);
          setTimeout(this.handleLegend.bind(this), 0x7d0);
          return;
        }
        const _0x1c2938 = $("[data-test=\"player-practice-again\"]");
        if (_0x1c2938) {
          _0x1c2938.click();
          setTimeout(this.handlePracticeChallenge.bind(this), 0x7d0);
          return;
        }
      }
    }
    const _0xca32f6 = $("[data-test=\"player-next\"]");
    if (!_0xca32f6) {
      setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
      return;
    }
    const _0x23881a = _0xca32f6.querySelector("[class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\"]");
    if (_0x23881a) {
      setTimeout(this.nextQuestion.bind(this), 0x3e8);
      return;
    }
    const _0x44dda9 = _0xca32f6.getAttribute("aria-disabled");
    if (_0x44dda9 === "true") {
      setTimeout(this.doChallenge.bind(this), this.nextTime);
      return;
    }
    _0xca32f6.click();
    setTimeout(this.nextQuestion.bind(this), this.nextTime);
  };
  ["getData"] = function (_0x26e18d) {
    const _0x17a803 = $(this.dataWrapper);
    const _0x1e704d = Object.keys(_0x17a803);
    const _0x58fe97 = _0x1e704d.find(_0x194afe => _0x194afe.startsWith('__reactProps'));
    if (!_0x58fe97) {
      return this.autoduoError("L\xE1\xBB\u2014i t\xC3\xACm ki\xE1\xBA\xBFm react props");
    }
    const _0x5ac576 = this.genealogy.reduce((_0x40ecbd, _0x274740) => {
      if (_0x40ecbd === null) {
        return null;
      }
      const _0xb7c2f8 = _0x40ecbd[_0x274740];
      return _0xb7c2f8 || null;
    }, _0x17a803[_0x58fe97]);
    if (_0x5ac576 === null) {
      return this.autoduoError("X\xE1\xBA\xA3y ra l\xE1\xBB\u2014i trong qu\xC3\xA1 tr\xC3\xACnh t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
    }
    if (Array.isArray(_0x26e18d)) {
      const _0x341313 = _0x26e18d.reduce((_0x500926, _0x4b7ad3) => {
        if (_0x500926 === null) {
          return null;
        }
        const _0x20a0ec = _0x500926[_0x4b7ad3];
        return _0x20a0ec || null;
      }, _0x5ac576);
      if (_0x341313 === null) {
        return this.autoduoError("X\xE1\xBA\xA3y ra l\xE1\xBB\u2014i trong qu\xC3\xA1 tr\xC3\xACnh t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
      }
      return Array.isArray(_0x341313) ? [..._0x341313] : _0x341313;
    } else {
      const _0x3010e0 = _0x5ac576[_0x26e18d];
      return Array.isArray(_0x3010e0) ? [..._0x3010e0] : _0x3010e0;
    }
  };
  ["getExp"] = function (_0x14818e) {
    const _0x5d402a = Object.keys(_0x14818e);
    const _0x1565b6 = _0x5d402a.find(_0x5ed85e => _0x5ed85e.startsWith("__reactProps"));
    const _0x2ef0f1 = _0x14818e?.[_0x1565b6]?.["children"]?.["props"]?.["slide"]?.["xpGoalSessionProgress"]?.["totalXpThisSession"];
    return _0x2ef0f1;
  };
  ["renderTime"] = function () {
    const _0x42cf8c = this.timeFormat(this.totalTime);
    this.dateElm.innerText = _0x42cf8c;
  };
  ['timeFormat'] = function (_0x4db8ba) {
    const _0x27a35d = parseInt(_0x4db8ba / 0x3e8 / 0x3c / 0x3c);
    const _0x3c457 = parseInt(_0x4db8ba / 0x3e8 / 0x3c % 0x3c);
    const _0xf87016 = _0x27a35d < 0xa ? '0' + _0x27a35d : _0x27a35d;
    const _0x961a7c = _0x3c457 < 0xa ? '0' + _0x3c457 : _0x3c457;
    return _0xf87016 + 'h:' + _0x961a7c + 'm';
  };
  ["showKeyBtnLoading"] = function (_0x1bcedc) {
    if (_0x1bcedc) {
      this.keyBtn.appendChild(this.btnLoading);
    } else {
      this.keyBtn.removeChild(this.btnLoading);
    }
  };
  ["setAutoRunning"] = function (_0x466008) {
    this.isAutoRunning = _0x466008;
  };
  ['setSafeMode'] = function (_0x25b686) {
    this.isSafeMode = _0x25b686;
    this.safeDelayTime = _0x25b686 ? this.safeDelayTimeTemp : 0x32;
    setDataSession("isSafeMode", _0x25b686);
    return _0x25b686;
  };
  ["autoduoDecode"] = function (_0x152624) {
    const _0x12f79b = _0x152624.slice(0xd);
    try {
      return JSON.parse(atob(_0x12f79b));
    } catch (_0x34d3e3) {
      return null;
    }
  };
  ["autoduoError"] = function (_0x413847) {
    if (this.isAuto) {
      this.stop();
    }
    if (this.isAutoRunning) {
      this.setAutoRunning(false);
    }
    alert("ERROR: " + _0x413847);
  };
  ["autoduoCreateSwitch"] = function (_0x490b0 = '', _0x3eec28, _0x318d08, _0x61058c) {
    const _0x515b54 = document.createElement('i');
    Object.assign(_0x515b54, {
      'className': "switch-info-listening",
      'title': "Xem th\xC3\xB4ng tin",
      'onclick': () => {
        alert(_0x490b0);
      }
    });
    const _0x5cc976 = document.createElement("input");
    Object.assign(_0x5cc976, {
      'type': 'checkbox',
      'hidden': true,
      'checked': _0x318d08
    });
    const _0x69b56c = _0x36bad6 => {
      _0x5cc976.checked = _0x36bad6;
    };
    const _0x2002c9 = document.createElement("label");
    _0x2002c9.addEventListener("click", () => {
      _0x61058c(_0x69b56c);
    });
    _0x3eec28.classList.add('switch-wrapper-listening');
    _0x3eec28.append(_0x515b54, _0x5cc976, _0x2002c9);
  };
  ["showGuide"] = function () {
    alert("+++++ H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN +++++\n\n- C\xE1\xBA\xA7n c\xC3\xB3 key k\xC3\xADch ho\xE1\xBA\xA1t auto, n\xE1\xBA\xBFu kh\xC3\xB4ng c\xC3\xB3, vui l\xC3\xB2ng b\xE1\xBA\xA5m v\xC3 o n\xC3\xBAt \"LINK L\xE1\xBA\xA4Y KEY\" ho\xE1\xBA\xB7c li\xC3\xAAn h\xE1\xBB\u2021 admin\n- N\xE1\xBA\xBFu kh\xC3\xB4ng bi\xE1\xBA\xBFt c\xC3\xA1ch l\xE1\xBA\xA5y key, h\xC3\xA3y ch\xE1\xBB\x8Dn \"H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN L\xE1\xBA\xA4Y KEY\"\n- Key c\xC3\xB3 th\xE1\xBB\x9Di gian gi\xE1\xBB\u203Ai h\xE1\xBA\xA1n, n\xE1\xBA\xBFu key h\xE1\xBA\xBFt h\xE1\xBA\xA1n s\xE1\xBA\xBD t\xE1\xBB\xB1 \xC4\u2018\xE1\xBB\u2122ng \xC4\u2018\xE1\xBA\xA9y ra m\xC3 n h\xC3\xACnh nh\xE1\xBA\xADp key\n- Key VIP s\xE1\xBA\xBD c\xC3\xB3 th\xE1\xBB\x9Di gian l\xC3\xA2u h\xC6\xA1n v\xC3  b\xE1\xBA\xA1n s\xE1\xBA\xBD kh\xC3\xB4ng ph\xE1\xBA\xA3i v\xC6\xB0\xE1\xBB\xA3t link l\xE1\xBA\xA5y key, \xC4\u2018\xE1\xBB\u0192 xem chi ti\xE1\xBA\xBFt, h\xC3\xA3y ch\xE1\xBB\x8Dn \"\xC4\x90\xC4\u201ANG K\xC3\x9D KEY VIP\"\n- Key l\xC3  ph\xC6\xB0\xC6\xA1ng th\xE1\xBB\xA9c duy nh\xE1\xBA\xA5t gi\xC3\xBAp m\xC3\xACnh ki\xE1\xBA\xBFm th\xC3\xAAm thu nh\xE1\xBA\xADp \xC4\u2018\xE1\xBB\u0192 ti\xE1\xBA\xBFp t\xE1\xBB\xA5c v\xE1\xBB\xAFng v\xC3 ng tr\xC3\xAAn con \xC4\u2018\xC6\xB0\xE1\xBB\x9Dng ph\xC3\xA1t tri\xE1\xBB\u0192n AutoDuo, n\xC3\xAAn mong c\xC3\xA1c b\xE1\xBA\xA1n th\xC3\xB4ng c\xE1\xBA\xA3m v\xC3  \xE1\xBB\xA7ng h\xE1\xBB\u2122 m\xC3\xACnh b\xE1\xBA\xB1ng c\xC3\xA1ch t\xE1\xBB\xB1 m\xC3\xACnh v\xC6\xB0\xE1\xBB\xA3t link l\xE1\xBA\xA5y key v\xC3  kh\xC3\xB4ng chia s\xE1\xBA\xBB key cho b\xE1\xBA\xA5t k\xC3\xAC ai kh\xC3\xA1c, m\xC3\xACnh xin c\xE1\xBA\xA3m \xC6\xA1n r\xE1\xBA\xA5t nhi\xE1\xBB\x81u!\n- Tham gia nh\xC3\xB3m chat Zalo \xC4\u2018\xE1\xBB\u0192 \xC4\u2018\xC6\xB0\xE1\xBB\xA3c h\xE1\xBB\u2014 tr\xE1\xBB\xA3 v\xC3  t\xE1\xBA\xA3i nh\xE1\xBB\xAFng phi\xC3\xAAn b\xE1\xBA\xA3n m\xE1\xBB\u203Ai nh\xE1\xBA\xA5t!\n- Auto hi\xE1\xBB\u2021n t\xE1\xBA\xA1i ch\xE1\xBB\u2030 ho\xE1\xBA\xA1t \xC4\u2018\xE1\xBB\u2122ng trong kh\xC3\xB3a h\xE1\xBB\x8Dc Ti\xE1\xBA\xBFng Anh - Ti\xE1\xBA\xBFng Vi\xE1\xBB\u2021t\n\nAutoDuo Super By Dev X\xE1\xBA\xA5u!");
  };
  ["createStyle"] = function () {
    const _0x124777 = document.createElement("style");
    _0x124777.innerHTML = "\n            .auto-container-listening{\n                position: fixed;\n                z-index: 9999999;\n                left: 20px;\n                bottom: 75px;\n\t\t\t\twidth: 220px !important;\n\t\t\t\tpadding: 8px;\n\t\t\t\tborder: 2px dotted #00b3c1;\n\t\t\t\tborder-radius: 20px;\n            }\n\t\t\t.auto-container-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tfilter: blur(52px);\n\t\t\t\tbackground-color: rgb(171 244 255 / 32%);\n\t\t\t\tz-index: -1;\n\t\t\t}\n\t\t\t.auto-listening, .dropkey-btn-listening{\n\t\t\t\twidth: 100% !important;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\t.auto-listening.disable {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t\tpointer-events: none !important;\n\t\t\t}\n\t\t\t.auto-listening.disable::before{\n\t\t\t\tbackground-color: #9c9c9c !important;\n    \t\t\tcolor: #686868 !important;\n\t\t\t}\n\t\t\t.auto-listening.vip::before {\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vip.ndx');\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\t\t\t.auto-listening.vip.running::before{\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vip.ndx'), url('https://api.nghiane.online/autoduo/assets/thunder.ndx');\n\t\t\t\tbackground-size: contain, cover;\n\t\t\t\tbackground-position: left, right;\n\t\t\t}\n            .statistic-listening {\n                color: #0016ff;\n                font-size: 18px;\n                font-weight: bold;\n            }\n\t\t\t.statistic-listening p{\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t#total-exp-listening::before{\n                content: 'KN - ';\n            }\n            #total-exp-listening::after{\n                content: ' EXP';\n            }\n\t\t\t.time-listening::before{\n\t\t\t\tcontent: 'Time - ';\n\t\t\t}\n\n\t\t\t.key-container-listening{\n\t\t\t\tposition: fixed;\n                left: 20px;\n\t\t\t\tbottom: 75px;\n\t\t\t\twidth: 250px;\n                z-index: 99999999;\n\t\t\t\ttext-align:center;\n\t\t\t}\n\n\t\t\t.key-container-listening > * {\n\t\t\t\tfont-size: 15px !important;\n\t\t\t}\n\n\t\t\t.key-input-listening{\n                border: 2px solid #aaa;\n                width: 100%;\n                padding: 12px 8px;\n                border-radius: 8px;\n                background-color: #eee;\n            }\n\n            .key-btn-listening {\n\t\t\t\tposition: relative;\n                width: 100%;\n\t\t\t\tmargin: 6px 0;\n            }\n\t\t\t.loading-listening{\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: var(--web-ui_button-background-color,rgb(var(--color-macaw)));\n    \t\t\tborder-radius: inherit;\n\t\t\t}\n            \n\t\t\t.guide-btn-listening, .getlink-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: calc(50% - 3px);\n\t\t\t\tmin-width: 0;\n\t\t\t}\n\t\t\t.getlink-btn-listening{\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t\t.guide-getlink-btn-listening, .key-vip-btn-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 6px;\n\t\t\t}\n\t\t\t.key-vip-btn-listening{\n\t\t\t\tcolor: yellow;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::before{\n\t\t\t\tbackground-color: #e800ff;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/twinkle.ndx');\n    \t\t\tbackground-size: 85px auto;\n\t\t\t\tcolor: #ff5de2;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.signature-listening{\n\t\t\t\tposition: fixed;\n                z-index: 99999999;\n\t\t\t\ttop: 4px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tcolor: red;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tfont-style: italic;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\twidth: max-content;\n\t\t\t}\n\n\t\t\t.key-type-listening::before {\n\t\t\t\tcontent: \"Type: \";\n\t\t\t}\n\t\t\t.key-expired-listening::before {\n\t\t\t\tcontent: \"HSD: \";\n\t\t\t}\n\t\t\t.vip-type-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #ff00ff;\n\t\t\t\tbackground-color: #ffe0fd;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid #ff00ff;\n\t\t\t}\n\t\t\t.vip-type-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.vip-expired-listening{\n\t\t\t\tcolor: #ff00ff;\n\t\t\t}\n\t\t\t.show-hide-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 999999999;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #00DBDE;\n\t\t\t\tbackground-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);\n\t\t\t\tborder-color: #b800c8;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.show-hide-listening.vip::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vipCircle.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\t\t\t.show-hide-listening::after{\n\t\t\t\tcontent: var(--data-version);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransform: translate(-50%, 120%);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #b800c8;\n\t\t\t}\n\t\t\t.show-hide-listening.older::after{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t.show-hide-listening i {\n\t\t\t\tposition: relative;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/eye.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.show-hide-listening.hide i::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 110%;\n\t\t\t\theight: 5px;\n\t\t\t\ttransform: rotate(45deg) translateX(-3px);\n\t\t\t\tbackground-color: #c0efff;\n\t\t\t\tborder-radius: 7px;\n\t\t\t}\n\t\t\t.overlay-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: 9999\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.disable{\n\t\t\t\topacity: .4;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable{\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.switch-info-listening{\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/infomation-icon.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.switch-info-listening:hover{\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening label{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 46px;\n\t\t\t\theight: 24px;\n\t\t\t\tbackground-color: #bbb;\n\t\t\t\tbox-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening label::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: white;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label{\n\t\t\t\tbackground-color: #1FC2FF;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label::after {\n\t\t\t\tleft: 100%;\n\t\t\t\ttransform: translateX(calc(-100% - 2px));\n\t\t\t}\n\n\t\t\t.safemode-wrapper::before{\n\t\t\t\tcontent: 'Safe Mode';\n\t\t\t}\n\t\t\t.legendmode-wrapper::before{\n\t\t\t\tcontent: 'Legend Mode';\n\t\t\t}\n\t\t\t\n\t\t\t.function-wrapper-listening{\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #ff4e00;\n\t\t\t}\n        ";
    document.head.appendChild(_0x124777);
  };
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
function getSession() {
  const _0xf3f2c2 = sessionStorage.getItem("autoduoSuperStorageKey") || '{}';
  return JSON.parse(_0xf3f2c2);
}
function setDataSession(_0x3bddca, _0x49b92c) {
  const _0x3f8c20 = getSession();
  _0x3f8c20[_0x3bddca] = _0x49b92c;
  sessionStorage.setItem("autoduoSuperStorageKey", JSON.stringify(_0x3f8c20));
}
function getDataSession(_0x2191f9) {
  const _0x40e061 = getSession();
  return _0x40e061[_0x2191f9];
}
function removeDataSession() {
  sessionStorage.removeItem("autoduoSuperStorageKey");
}
function getLocal() {
  const _0x16fb6f = localStorage.getItem("autoduoSuperStorageKey") || '{}';
  return JSON.parse(_0x16fb6f);
}
function setDataLocal(_0x58a09b, _0x1e3bb7) {
  const _0xf82b7d = getLocal();
  _0xf82b7d[_0x58a09b] = _0x1e3bb7;
  localStorage.setItem("autoduoSuperStorageKey", JSON.stringify(_0xf82b7d));
}
function getDataLocal(_0x363291) {
  const _0x1d5f26 = getLocal();
  return _0x1d5f26[_0x363291];
}
const autoDuoSuper = new AutoDuoSuper();
autoDuoSuper.setup();

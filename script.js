class AutoDuoSuper {
  ["version"] = '2.0.2';
  ['isAuto'] = false;
  ["isAutoRunning"] = false;
  ["isSafeMode"] = getDataSession('isSafeMode') || false;
  ['isLegendMode'] = false;
  ['nextTime'] = 0x118;
  ["goChallengeTime"] = 0x320;
  ["safeDelayTime"] = 0x32;
  ['safeDelayTimeTemp'] = 0x12c;
  ["genealogy"] = [];
  ["isEnterKey"] = false;
  ["startTime"] = null;
  ["isShowUI"] = true;
  ['exp'] = getDataSession('exp') || 0x0;
  ["totalTime"] = getDataSession('time') || 0x0;
  ["isKeyVip"] = false;
  ["vipSpeed"] = null;
  ['generalData'] = getDataSession('generalData');
  ["authenData"] = getDataSession("authenData");
  ['apiUrl'] = "https://api.nghiane.online/autoduo/super/";
  ["homePage"] = '/learn';
  ['practicePath'] = "/practice";
  ["practiceHubPath"] = "/practice-hub";
  ["listeningPacticePath"] = '/practice-hub/listening-practice';
  ["dataWrapper"] = "._863KE";
  ["nativeTextareaValueSetter"] = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
  ['nativeInputValueSetter'] = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
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
    if (getDataSession('isAuto')) {
      this.start();
    }
  };
  ["createSignature"] = function () {
    const _0x42c972 = document.createElement("div");
    _0x42c972.className = "signature-listening";
    _0x42c972.innerHTML = "AutoDuo Super - Dev X\xE1\xBA\xA5u X\xC3\xAD<br />LH Zalo: 0838513245";
    document.body.appendChild(_0x42c972);
  };
  ["createBtn"] = function () {
    this.autoBtn = document.createElement("button");
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
      const _0x357204 = window.confirm("B\xE1\xBA\xA1n c\xC3\xB3 th\xE1\xBB\xB1c s\xE1\xBB\xB1 mu\xE1\xBB\u2018n g\xE1\xBB\xA1 Key hi\xE1\xBB\u2021n t\xE1\xBA\xA1i kh\xC3\xB4ng? (Sau khi g\xE1\xBB\xA1 s\xE1\xBA\xBD t\xE1\xBB\xB1 \xC4\u2018\xE1\xBB\u2122ng l\xC3 m m\xE1\xBB\u203Ai trang \xC4\u2018\xE1\xBB\u0192 c\xE1\xBA\xADp nh\xE1\xBA\xADt)");
      
    });
    this.showHideBtn = document.createElement("button");
    Object.assign(this.showHideBtn, {
      'className': 'show-hide-listening',
      'style': "--data-version: 'V" + this.version + "'",
      'innerHTML': '<i></i>'
    });
    this.showHideBtn.addEventListener('click', () => {
      this.isShowUI = !this.isShowUI;
      if (this.isShowUI) {
        this.showHideBtn.classList.remove('hide');
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
  ["createStatistics"] = function () {
    this.statistic = document.createElement("div");
    this.keyTypeElm = document.createElement('p');
    this.keyExpiredElm = document.createElement('p');
    this.expElm = document.createElement('p');
    this.dateElm = document.createElement('p');
    this.dateElm = document.createElement('p');
    this.keyTypeElm.className = "key-type-listening";
    this.keyExpiredElm.className = "key-expired-listening";
    this.expElm.id = "total-exp-listening";
    this.expElm.innerText = this.exp;
    this.statistic.className = "statistic-listening";
    this.dateElm.className = "time-listening";
    this.statistic.append(this.keyTypeElm, this.keyExpiredElm, this.dateElm, this.expElm);
  };
  ["createFunctions"] = function () {
    this.safeModeWrapper = document.createElement("div");
    this.safeModeWrapper.className = "safemode-wrapper";
    this.autoduoCreateSwitch("- SAFE MODE (ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 an to\xC3 n):\nKhi b\xE1\xBA\xADt ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 n\xC3 y, t\xE1\xBB\u2018c \xC4\u2018\xE1\xBB\u2122 ho\xC3 n th\xC3 nh b\xC3 i h\xE1\xBB\x8Dc s\xE1\xBA\xBD ch\xE1\xBA\xADm r\xC3\xA3i h\xC6\xA1n. B\xC3\xB9 l\xE1\xBA\xA1i, th\xE1\xBB\x9Di gian v\xC3  l\xC6\xB0\xE1\xBB\xA3ng kinh nghi\xE1\xBB\u2021m s\xE1\xBA\xBD \xC4\u2018\xC6\xB0\xE1\xBB\xA3c t\xE1\xBB\xB1 nhi\xC3\xAAn nh\xE1\xBA\xA5t, gi\xE1\xBA\xA3m thi\xE1\xBB\u0192u c\xC3\xA1c r\xE1\xBB\xA7i ro v\xE1\xBB\x81 REPORT v\xC3  BAN t\xC3 i kho\xE1\xBA\xA3n!", this.safeModeWrapper, this.isSafeMode, _0x1fbedc => {
      if (this.isAuto) {
        return;
      }
      _0x1fbedc(this.setSafeMode(!this.isSafeMode));
    });
    this.legendModeWrapper = document.createElement("div");
    this.legendModeWrapper.className = "legendmode-wrapper";
    this.autoduoCreateSwitch("- LEGEND MODE (ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 l\xC3 m huy\xE1\xBB\x81n tho\xE1\xBA\xA1i):\nKhi \xC4\u2018\xC6\xB0\xE1\xBB\xA3c b\xE1\xBA\xADt, h\xE1\xBB\u2021 th\xE1\xBB\u2018ng kh\xC3\xB4ng l\xC3 m l\xE1\xBA\xB7p l\xE1\xBA\xA1i c\xC3\xA1c b\xC3 i luy\xE1\xBB\u2021n t\xE1\xBA\xADp nh\xC6\xB0 ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 th\xC3\xB4ng th\xC6\xB0\xE1\xBB\x9Dng m\xC3  s\xE1\xBA\xBD ch\xE1\xBB\u2030 l\xC3 m c\xC3\xA1c b\xC3 i c\xE1\xBB\xA5 th\xE1\xBB\u0192 m\xC3  ng\xC6\xB0\xE1\xBB\x9Di d\xC3\xB9ng ch\xE1\xBB\x8Dn. Ch\xE1\xBA\xBF \xC4\u2018\xE1\xBB\u2122 n\xC3 y \xC4\u2018\xC6\xB0\xE1\xBB\xA3c s\xE1\xBB\xAD d\xE1\xBB\xA5ng \xC4\u2018\xE1\xBB\u0192 l\xC3 m c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp huy\xE1\xBB\x81n tho\xE1\xBA\xA1i v\xC3  t\xE1\xBA\xA5t c\xE1\xBA\xA3 c\xC3\xA1c b\xC3 i t\xE1\xBA\xADp t\xC6\xB0\xC6\xA1ng t\xE1\xBB\xB1 kh\xC3\xA1c!\n\n - L\xC6\xB0u \xC3\xBD: C\xE1\xBA\xA7n c\xC3\xB3 Key Vip \xC4\u2018\xE1\xBB\u0192 s\xE1\xBB\xAD d\xE1\xBB\xA5ng t\xC3\xADnh n\xC4\u0192ng n\xC3 y!", this.legendModeWrapper, this.isLegendMode, _0x1d5448 => {
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
      _0x1d5448(this.isLegendMode);
    });
    this.functionWrapper = document.createElement("div");
    this.functionWrapper.className = 'function-wrapper-listening';
    this.functionWrapper.append(this.safeModeWrapper, this.legendModeWrapper);
  };
  ['createContainer'] = function () {
    this.keyContainer = document.createElement("div");
    this.keyContainer.className = "key-container-listening";
    this.keyContainer.append(this.keyInput, this.keyBtn, this.guideBtn, this.getLinkBtn, this.guideGetLinkBtn, this.keyVipBtn);
    document.body.appendChild(this.keyContainer);
    this.autoContainer = document.createElement('div');
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
    this.btnLoading = document.createElement('div');
    Object.assign(this.btnLoading, {
      'className': "loading-listening",
      'innerHTML': "<div class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\" style=\"transition-duration: 250ms;\"><div class=\"_2buOS _2Amjo\"></div><div class=\"_3AW2F _2Amjo\"></div><div class=\"Utckm _2Amjo\"></div></div>"
    });
    this.guideBtn = document.createElement("div");
    Object.assign(this.guideBtn, {
      'className': "_2N_A5 _36Vd3 _16r-S _1SeBB guide-btn-listening",
      'innerText': "H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN"
    });
    this.getLinkBtn = document.createElement('a');
    Object.assign(this.getLinkBtn, {
      'className': "_1N-oo _36Vd3 _16r-S _2zs7L getlink-btn-listening",
      'innerText': "LINK L\xE1\xBA\xA4Y KEY",
      'target': '_blank'
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
      'target': '_blank'
    });
    this.keyInput.onkeydown = _0x5967f4 => _0x5967f4.stopPropagation();
    this.btnLoading.onclick = _0x40c07f => _0x40c07f.stopPropagation();
    this.keyBtn.addEventListener("click", () => {
      const _0x3d459a = this.keyInput.value;
      if (_0x3d459a) {
        this.handleAuthen(_0x3d459a, true, 0x3e8);
      }
    });
    this.guideBtn.addEventListener("click", this.showGuide);
  };
  ["handleAuthen"] = function (_0x459fc4, _0x432022 = false, _0x131b6d = 0x0) {
    if (!_0x459fc4) {
      _0x459fc4 = getDataLocal("key");
      if (!_0x459fc4) {
        return;
      }
    }
    this.showKeyBtnLoading(true);
    const _0x374d6d = new FormData();
    _0x374d6d.append('key', _0x459fc4);
    setTimeout(() => {
      fetch(this.apiUrl, {
        'method': 'post',
        'body': _0x374d6d
      }).then(_0x5a2ef3 => _0x5a2ef3?.["json"]()).then(_0x1da9fb => {
        switch (_0x1da9fb?.['code']) {
          case 0xc8:
            const _0x46d74c = _0x1da9fb.data;
            this.setAuthen(_0x46d74c);
            setDataSession("authenData", _0x46d74c);
            if (_0x432022) {
              setDataLocal("key", _0x459fc4);
            }
            break;
          case 0x190:
            if (_0x432022) {
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
      })["finally"](() => {
        this.showKeyBtnLoading(false);
      });
    }, _0x131b6d);
  };
  ["setAuthen"] = function (_0x3b3aac) {
    const _0x4e69b9 = this.autoduoDecode(_0x3b3aac);
    if (_0x4e69b9 === null) {
      return this.autoduoError("L\xE1\xBB\u2014i d\xE1\xBB\xAF li\xE1\xBB\u2021u kh\xC3\xB4ng h\xE1\xBB\xA3p l\xE1\xBB\u2021!");
    }
    const {
      keyData: _0xd58f86,
      genealogy: _0xbff5b3
    } = _0x4e69b9;
    this.handleReadyAuto(_0xbff5b3, _0xd58f86);
  };
  ["handleGetGeneral"] = function () {
    fetch(this.apiUrl + "?author=alinhdx").then(_0x7346b0 => _0x7346b0?.["json"]()).then(_0x22a707 => {
      if (_0x22a707?.['code'] === 0xc8) {
        const _0x2a15dc = _0x22a707.data;
        this.setGeneral(_0x2a15dc);
        setDataSession('generalData', _0x2a15dc);
      }
    });
  };
  ["setGeneral"] = function (_0x1e5d0b) {
    const _0x1afd76 = this.autoduoDecode(_0x1e5d0b);
    if (_0x1afd76 === null) {
      return this.autoduoError("L\xE1\xBB\u2014i d\xE1\xBB\xAF li\xE1\xBB\u2021u kh\xC3\xB4ng h\xE1\xBB\xA3p l\xE1\xBB\u2021!");
    }
    const {
      version: _0x3f82b6,
      keyUrl: _0x5735df,
      guideGetKeyUrl: _0x48bae5,
      keyVipUrl: _0x5ec867,
      sd: _0x232eb9,
      vsd: _0x308bde
    } = _0x1afd76;
    this.getLinkBtn.href = _0x5735df;
    this.guideGetLinkBtn.href = _0x48bae5;
    this.keyVipBtn.href = _0x5ec867;
    this.handleUpdateSpeed(_0x232eb9, _0x308bde);
    this.handleVersion(_0x3f82b6);
  };
  ["handleUpdateSpeed"] = function (_0x508c45, _0x165bad) {
    if (_0x508c45 && _0x165bad) {
      [this.nextTime, this.goChallengeTime, this.safeDelayTimeTemp] = this.isKeyVip ? _0x165bad : _0x508c45;
      if (!this.isKeyVip) {
        this.vipSpeed = _0x165bad;
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
  ['handleVersion'] = function (_0x31d304) {
    if (this.version !== _0x31d304) {
      this.showHideBtn.classList.add('older');
      this.autoBtn.onclick = _0x5205cf;
      setTimeout(_0x5205cf, 0x3e8);
      function _0x5205cf() {
        alert("Phi\xC3\xAAn b\xE1\xBA\xA3n AutoDuo Super hi\xE1\xBB\u2021n t\xE1\xBA\xA1i \xC4\u2018\xC3\xA3 c\xC5\xA9, h\xC3\xA3y t\xE1\xBA\xA3i v\xC3  c\xC3 i \xC4\u2018\xE1\xBA\xB7t phi\xC3\xAAn b\xE1\xBA\xA3n V" + _0x31d304 + " trong nh\xC3\xB3m Zalo \xC4\u2018\xE1\xBB\u0192 c\xE1\xBA\xADp nh\xE1\xBA\xADt c\xC3\xA1c t\xC3\xADnh n\xC4\u0192ng m\xE1\xBB\u203Ai v\xC3  c\xC3\xB3 th\xE1\xBB\u0192 s\xE1\xBB\xAD d\xE1\xBB\xA5ng auto!");
      }
    }
  };
  ["handleKeyMarkup"] = function (_0x46f5ee, _0x4f48ac) {
    let _0x3ceb77;
    let _0x4abc5b;
    switch (_0x46f5ee) {
      case "vip":
        _0x3ceb77 = "<b class='vip-type-listening'>Key VIP</b>";
        _0x4abc5b = "<b class='vip-expired-listening'>" + _0x4f48ac + "</b>";
        this.autoBtn.classList.add("vip");
        this.showHideBtn.classList.add('vip');
        this.isKeyVip = true;
        this.handleUpdateSpeed();
        break;
      default:
        _0x3ceb77 = "<span style='color: green'>Key ph\xE1\xBB\u2022 th\xC3\xB4ng</span>";
        _0x4abc5b = "<span style='color: green'>" + _0x4f48ac + "</span>";
        this.legendModeWrapper.classList.add("unavailable");
        break;
    }
    this.keyTypeElm.innerHTML = _0x3ceb77;
    this.keyExpiredElm.innerHTML = _0x4abc5b;
  };
  ["handleReadyAuto"] = function (_0x239cd9, _0x12e0f7) {
    const {
      type: _0x2ec810,
      expiredAt: _0x1f6bd2
    } = _0x12e0f7;
    this.handleKeyMarkup(_0x2ec810, _0x1f6bd2);
    this.genealogy = _0x239cd9;
    this.isEnterKey = true;
    document.body.removeChild(this.keyContainer);
    document.body.append(this.autoContainer);
  };
  ["handleReload"] = function () {
    if (this.isAuto) {
      this.stop();
    }
    const _0x16060f = window.location.pathname;
    switch (_0x16060f) {
      case this.listeningPacticePath:
        const _0x2e83da = document.querySelector("[data-test=\"quit-button\"]");
        if (_0x2e83da) {
          _0x2e83da.click();
        }
        setTimeout(() => {
          const _0x2a62cb = document.querySelector("[data-test=\"notification-button\"]");
          if (_0x2a62cb) {
            _0x2a62cb.click();
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
    this.safeModeWrapper.classList.add('disable');
    this.legendModeWrapper.classList.add("disable");
    document.body.appendChild(this.overlayContainer);
    this.isAuto = true;
    this.autoBtn.classList.add("NAidc", "running");
    this.autoBtn.innerText = "Stop Auto";
    setDataSession("isAuto", this.isAuto);
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
    setDataSession('isAuto', this.isAuto);
  };
  ["startLegend"] = function () {
    if (this.isLegendMode || this.isAutoRunning || this.isAuto) {
      return;
    }
    this.safeModeWrapper.classList.add('disable');
    this.autoBtn.classList.add("disable");
    this.isAuto = true;
    this.isLegendMode = true;
    this.handleLegend();
  };
  ['stopLegend'] = function () {
    if (!this.isLegendMode) {
      return;
    }
    this.safeModeWrapper.classList.remove('disable');
    this.autoBtn.classList.remove("disable");
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
    const _0x1b3b55 = $("[data-test=\"challenge-header\"]");
    if (_0x1b3b55) {
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
    const _0x5e71cb = window.location.pathname;
    switch (_0x5e71cb) {
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
  ['goPracticeHubChallenge'] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x14b241 = $("[class=\"_3ekD2\"]");
    const _0x5584e2 = _0x14b241.querySelector(".vJj1P");
    if (!_0x5584e2) {
      return this.autoduoError("L\xE1\xBB\u2014i t\xC3\xACm n\xC3\xBAt th\xE1\xBB\xAD th\xC3\xA1ch");
    }
    _0x5584e2.click();
    setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
  };
  ["goPracticeChallenge"] = function () {
    window.location.href = this.practicePath;
  };
  ['handlePracticeHubChallenge'] = function () {
    if (window.location.pathname === this.practiceHubPath) {
      this.goPracticeHubChallenge();
      return;
    }
    const _0x1b384b = $("[data-test=\"player-next\"][aria-disabled=\"false\"]");
    if (_0x1b384b) {
      this.nextQuestion();
      return;
    }
    const _0x20c726 = $(this.dataWrapper);
    if (_0x20c726) {
      this.doChallenge();
      return;
    }
    setTimeout(this.handlePracticeHubChallenge.bind(this), 0x3e8);
  };
  ["handlePracticeChallenge"] = function () {
    const _0x47d874 = $("[data-test=\"player-next\"][aria-disabled=\"false\"]");
    if (_0x47d874) {
      this.nextQuestion();
      return;
    }
    const _0x363bf3 = $(this.dataWrapper);
    if (_0x363bf3) {
      this.doChallenge();
      return;
    }
    setTimeout(this.handlePracticeChallenge.bind(this), 0x3e8);
  };
  ["doChallenge"] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x1151eb = $(".FQpeZ");
    if (!_0x1151eb) {
      return this.autoduoError("Th\xE1\xBB\xAD th\xC3\xA1ch kh\xC3\xB4ng x\xC3\xA1c \xC4\u2018\xE1\xBB\u2039nh!!");
    }
    const _0x295ec0 = _0x1151eb.dataset.test?.['slice'](0xa);
    switch (_0x295ec0) {
      case "challenge-translate":
      case "challenge-listenTap":
      case "challenge-listen":
        this.handleChallengeTranslate(_0x295ec0);
        break;
      case 'challenge-gapFill':
      case "challenge-listenIsolation":
      case "challenge-assist":
      case "challenge-selectTranscription":
      case "challenge-characterIntro":
      case 'challenge-characterSelect':
      case "challenge-selectPronunciation":
      case "challenge-dialogue":
      case 'challenge-readComprehension':
      case "challenge-listenComprehension":
      case "challenge-select":
        this.handleChallengeChoice();
        break;
      case "challenge-characterMatch":
      case "challenge-match":
        this.handleChallengeMatch(_0x295ec0);
        break;
      case "challenge-listenComplete":
      case "challenge-name":
        this.handleChallengeTextInput(_0x295ec0);
        break;
      case "challenge-listenMatch":
        this.handleChallengeListenMatch();
        break;
      case "challenge-completeReverseTranslation":
        this.handleChallengeCompleteReverseTranslation(_0x295ec0);
        break;
      case 'challenge-partialReverseTranslate':
        this.handleChallengePartialReverseTranslate();
        break;
      case "challenge-tapComplete":
        this.handleChallengeTapComplete();
        break;
      case "challenge-speak":
        this.handleSkipChallenge();
        break;
      default:
        return this.autoduoError("No handle ~.~: " + _0x295ec0);
    }
    this.setAutoRunning(true);
  };
  ['handleChallengeTranslate'] = function (_0x57f2bb) {
    if (this.isAuto === false) {
      return;
    }
    let _0x249f2e = null;
    switch (_0x57f2bb) {
      case 'challenge-listenTap':
      case "challenge-translate":
        _0x249f2e = this.getData('correctTokens');
        if (!_0x249f2e?.["length"]) {
          _0x249f2e = this.getData(["challengeResponseTrackingProperties", "best_solution"])?.["split"](" ");
        }
        break;
      case "challenge-listen":
        _0x249f2e = this.getData("prompt")?.["split"](" ");
        break;
      case "challenge-completeReverseTranslation":
        _0x249f2e = this.getData(["metadata", "translation"]).split(" ");
        break;
    }
    if (_0x249f2e === null) {
      return this.autoduoError("Data is not found!");
    }
    const _0x5e8f37 = $("textarea[data-test=\"challenge-translate-input\"]");
    if (_0x5e8f37) {
      const _0x35ddde = new Event("input", {
        'bubbles': true
      });
      let _0xb121c1 = '';
      const _0x36c261 = () => {
        setTimeout(() => {
          if (_0x249f2e.length === 0x0) {
            this.nextQuestion();
            this.setAutoRunning(false);
            return;
          }
          _0xb121c1 += " " + _0x249f2e.shift();
          this.nativeTextareaValueSetter.call(_0x5e8f37, _0xb121c1);
          _0x5e8f37.dispatchEvent(_0x35ddde);
          _0x36c261();
        }, this.safeDelayTime);
      };
      _0x36c261();
      return;
    }
    const _0xa31df9 = Array.from($$("[class=\"_3Lqi-\"] [data-test=\"challenge-tap-token-text\"]"));
    const _0x275a70 = () => {
      setTimeout(() => {
        if (_0x249f2e.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        const _0x2d4d30 = _0x249f2e.shift();
        const _0x41c3df = _0xa31df9.findIndex(_0x47667d => _0x47667d.innerText === _0x2d4d30);
        if (_0x41c3df === -0x1) {
          return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y l\xE1\xBB\xB1a ch\xE1\xBB\x8Dn");
        }
        _0xa31df9[_0x41c3df].click();
        _0xa31df9.splice(_0x41c3df, 0x1);
        _0x275a70();
      }, this.safeDelayTime);
    };
    _0x275a70();
  };
  ['handleChallengeListenMatch'] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x498519 = Array.from($$("[class=\"_1deIS\"] > button"));
    const _0x5c084c = _0x498519.slice(_0x498519.length / 0x2);
    let _0x56bc78 = null;
    const _0x2cfe70 = (_0x587d56, _0xcd6fa5) => {
      setTimeout(() => {
        if (_0xcd6fa5.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        if (_0x56bc78 === null) {
          const _0x8db4f8 = _0x587d56.shift();
          _0x56bc78 = _0x8db4f8.dataset.test;
          _0x8db4f8.click();
        } else {
          const _0x3befa4 = _0xcd6fa5.findIndex(_0x2252e0 => _0x2252e0.dataset.test === _0x56bc78);
          if (_0x3befa4 === -0x1) {
            return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm \xC4\u2018\xC6\xB0\xE1\xBB\xA3c k\xE1\xBA\xBFt qu\xE1\xBA\xA3 t\xC6\xB0\xC6\xA1ng \xE1\xBB\xA9ng!");
          }
          _0xcd6fa5[_0x3befa4].click();
          _0xcd6fa5.splice(_0x3befa4, 0x1);
          _0x56bc78 = null;
        }
        _0x2cfe70(_0x587d56, _0xcd6fa5);
      }, this.safeDelayTime);
    };
    _0x2cfe70(_0x498519, _0x5c084c);
  };
  ["handleChallengeMatch"] = function (_0x19fd53) {
    if (!this.isAuto) {
      return;
    }
    const _0x39008f = Array.from($$("[data-test=\"challenge-tap-token-text\"]"));
    const _0x28e1ab = _0x39008f.splice(_0x39008f.length / 0x2);
    let _0x4e9e0a = null;
    switch (_0x19fd53) {
      case "challenge-characterMatch":
        _0x4e9e0a = this.getData("pairs")?.["reduce"]((_0x5231e2, _0x5238b7) => {
          const {
            transliteration: _0x276466,
            character: _0x244b76
          } = _0x5238b7;
          _0x5231e2[_0x276466] = _0x244b76;
          return _0x5231e2;
        }, {});
        break;
      case "challenge-match":
        _0x4e9e0a = this.getData("pairs")?.["reduce"]((_0x45734c, _0x473ad0) => {
          const {
            fromToken: _0x4f338e,
            learningToken: _0x127ad2
          } = _0x473ad0;
          _0x45734c[_0x4f338e] = _0x127ad2;
          return _0x45734c;
        }, {});
        break;
    }
    if (!_0x4e9e0a) {
      return this.autoduoError("Kh\xC3\xB4ng th\xE1\xBB\u0192 t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
    }
    let _0x45ecc0 = null;
    const _0x1e41ec = () => {
      setTimeout(() => {
        if (_0x28e1ab.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        if (_0x45ecc0 === null) {
          const _0x4bf2b9 = _0x39008f.shift();
          _0x4bf2b9.click();
          _0x45ecc0 = _0x4e9e0a[_0x4bf2b9.innerText];
        } else {
          const _0x4be51a = _0x28e1ab.findIndex(_0x539ae2 => _0x539ae2.innerText === _0x45ecc0);
          if (_0x4be51a === -0x1) {
            return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y \xC4\u2018\xC3\xA1p \xC3\xA1n th\xC3\xADch h\xE1\xBB\xA3p!");
          }
          _0x28e1ab[_0x4be51a].click();
          _0x28e1ab.splice(_0x4be51a, 0x1);
          _0x45ecc0 = null;
        }
        _0x1e41ec();
      }, this.safeDelayTime);
    };
    _0x1e41ec();
  };
  ["handleChallengeChoice"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x5a8919 = $$("[data-test=\"challenge-choice\"]");
    const _0x2c1c01 = this.getData("correctIndex");
    if (_0x2c1c01 === null) {
      return this.autoduoError("Data is not found!");
    }
    setTimeout(() => {
      _0x5a8919[_0x2c1c01].click();
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ["handleChallengeTextInput"] = function (_0x29db22) {
    if (!this.isAuto) {
      return;
    }
    let _0x50f208 = null;
    switch (_0x29db22) {
      case "challenge-listenComplete":
      case "challenge-completeReverseTranslation":
        _0x50f208 = $("[class=\"caPDQ\"]")?.["innerHTML"]?.['replaceAll']('_', '');
        break;
      case 'challenge-name':
        _0x50f208 = this.getData('correctSolutions')[0x0];
        break;
    }
    if (!_0x50f208) {
      return this.autoduoError("Data is not found!");
    }
    const _0x4a5cc1 = $("[data-test=\"challenge-text-input\"]");
    const _0x282476 = new Event('input', {
      'bubbles': true
    });
    setTimeout(() => {
      this.nativeInputValueSetter.call(_0x4a5cc1, _0x50f208);
      _0x4a5cc1.dispatchEvent(_0x282476);
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ["handleChallengePartialReverseTranslate"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0xc95646 = $("[class=\"_31xxw _2eX9t _1vqO5\"]")?.["innerHTML"];
    const _0x37862c = $("span[contenteditable=\"true\"]");
    const _0x1e63a9 = new Event("input", {
      'bubbles': true
    });
    setTimeout(() => {
      _0x37862c.innerText = _0xc95646;
      _0x37862c.dispatchEvent(_0x1e63a9);
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ["handleChallengeCompleteReverseTranslation"] = function (_0x168364) {
    const _0x159fa0 = $("textarea[data-test=\"challenge-translate-input\"]");
    if (_0x159fa0) {
      this.handleChallengeTranslate(_0x168364);
      return;
    }
    this.handleChallengeTextInput(_0x168364);
  };
  ["handleChallengeTapComplete"] = function () {
    if (!this.isAuto) {
      return;
    }
    const _0x3a1af6 = $$("[data-test=\"word-bank\"] [data-test=\"challenge-tap-token-text\"]");
    const _0x10ef91 = this.getData("correctIndices");
    if (!_0x10ef91) {
      return this.autoduoError("Data is not found!");
    }
    const _0x39835f = () => {
      setTimeout(() => {
        if (_0x10ef91.length === 0x0) {
          this.nextQuestion();
          this.setAutoRunning(false);
          return;
        }
        const _0x4345e3 = _0x10ef91.shift();
        _0x3a1af6[_0x4345e3].click();
        _0x39835f();
      }, this.safeDelayTime);
    };
    _0x39835f();
  };
  ['handleSkipChallenge'] = function () {
    setTimeout(() => {
      const _0x114c02 = $("[data-test=\"player-skip\"]");
      if (!_0x114c02) {
        return this.autoduoError("Kh\xC3\xB4ng t\xC3\xACm th\xE1\xBA\xA5y skip button!");
      }
      _0x114c02.click();
      setTimeout(() => {
        this.nextQuestion();
        this.setAutoRunning(false);
      }, this.safeDelayTime);
    }, this.safeDelayTime);
  };
  ['nextQuestion'] = function () {
    if (this.isAuto === false) {
      return;
    }
    const _0x1d629b = $("[class=\"_863KE\"]");
    if (_0x1d629b) {
      const _0x568f24 = this.getExp(_0x1d629b);
      if (_0x568f24 !== undefined) {
        this.exp += _0x568f24;
        this.expElm.innerText = this.exp;
        const _0x4195dc = Date.now();
        this.totalTime += _0x4195dc - this.startTime;
        this.startTime = _0x4195dc;
        this.renderTime();
        setDataSession("exp", this.exp);
        setDataSession("time", this.totalTime);
        if (this.isLegendMode) {
          document.body.removeChild(this.overlayContainer);
          setTimeout(this.handleLegend.bind(this), 0x7d0);
          return;
        }
        const _0x3d3e26 = $("[data-test=\"player-practice-again\"]");
        if (_0x3d3e26) {
          _0x3d3e26.click();
          setTimeout(this.handlePracticeChallenge.bind(this), 0x7d0);
          return;
        }
      }
    }
    const _0xac26e8 = $("[data-test=\"player-next\"]");
    if (!_0xac26e8) {
      setTimeout(this.handleLocation.bind(this), this.goChallengeTime);
      return;
    }
    const _0x4a0780 = _0xac26e8.querySelector("[class=\"_35QY2 _3jIlr f2zGP _18W4a xtPuL\"]");
    if (_0x4a0780) {
      setTimeout(this.nextQuestion.bind(this), 0x3e8);
      return;
    }
    const _0x890a49 = _0xac26e8.getAttribute("aria-disabled");
    if (_0x890a49 === "true") {
      setTimeout(this.doChallenge.bind(this), this.nextTime);
      return;
    }
    _0xac26e8.click();
    setTimeout(this.nextQuestion.bind(this), this.nextTime);
  };
  ["getData"] = function (_0x2b0055) {
    const _0x57e9e8 = $(this.dataWrapper);
    const _0x30d7a3 = Object.keys(_0x57e9e8);
    const _0x18c8ab = _0x30d7a3.find(_0x999ed9 => _0x999ed9.startsWith("__reactProps"));
    if (!_0x18c8ab) {
      return this.autoduoError("L\xE1\xBB\u2014i t\xC3\xACm ki\xE1\xBA\xBFm react props");
    }
    const _0x3270c6 = this.genealogy.reduce((_0x41e32e, _0x42f68e) => {
      if (_0x41e32e === null) {
        return null;
      }
      const _0x191eba = _0x41e32e[_0x42f68e];
      return _0x191eba || null;
    }, _0x57e9e8[_0x18c8ab]);
    if (_0x3270c6 === null) {
      return this.autoduoError("X\xE1\xBA\xA3y ra l\xE1\xBB\u2014i trong qu\xC3\xA1 tr\xC3\xACnh t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
    }
    if (Array.isArray(_0x2b0055)) {
      const _0x5b9d96 = _0x2b0055.reduce((_0x14da5a, _0x50bd65) => {
        if (_0x14da5a === null) {
          return null;
        }
        const _0xe4e88 = _0x14da5a[_0x50bd65];
        return _0xe4e88 || null;
      }, _0x3270c6);
      if (_0x5b9d96 === null) {
        return this.autoduoError("X\xE1\xBA\xA3y ra l\xE1\xBB\u2014i trong qu\xC3\xA1 tr\xC3\xACnh t\xE1\xBA\xA3i d\xE1\xBB\xAF li\xE1\xBB\u2021u!");
      }
      return Array.isArray(_0x5b9d96) ? [..._0x5b9d96] : _0x5b9d96;
    } else {
      const _0x25e1eb = _0x3270c6[_0x2b0055];
      return Array.isArray(_0x25e1eb) ? [..._0x25e1eb] : _0x25e1eb;
    }
  };
  ["getExp"] = function (_0x1c60b8) {
    const _0xc5e0ab = Object.keys(_0x1c60b8);
    const _0x2b5077 = _0xc5e0ab.find(_0x338601 => _0x338601.startsWith("__reactProps"));
    const _0x5cdc5b = _0x1c60b8?.[_0x2b5077]?.["children"]?.["props"]?.['slide']?.['xpGoalSessionProgress']?.["totalXpThisSession"];
    return _0x5cdc5b;
  };
  ["renderTime"] = function () {
    const _0x2cc8e2 = this.timeFormat(this.totalTime);
    this.dateElm.innerText = _0x2cc8e2;
  };
  ["timeFormat"] = function (_0x27102b) {
    const _0x508286 = parseInt(_0x27102b / 0x3e8 / 0x3c / 0x3c);
    const _0x1bdae6 = parseInt(_0x27102b / 0x3e8 / 0x3c % 0x3c);
    const _0x1565d1 = _0x508286 < 0xa ? '0' + _0x508286 : _0x508286;
    const _0x1034bd = _0x1bdae6 < 0xa ? '0' + _0x1bdae6 : _0x1bdae6;
    return _0x1565d1 + 'h:' + _0x1034bd + 'm';
  };
  ["showKeyBtnLoading"] = function (_0x406d6c) {
    if (_0x406d6c) {
      this.keyBtn.appendChild(this.btnLoading);
    } else {
      this.keyBtn.removeChild(this.btnLoading);
    }
  };
  ['setAutoRunning'] = function (_0x20942d) {
    this.isAutoRunning = _0x20942d;
  };
  ["setSafeMode"] = function (_0x4c40b2) {
    this.isSafeMode = _0x4c40b2;
    this.safeDelayTime = _0x4c40b2 ? this.safeDelayTimeTemp : 0x32;
    setDataSession('isSafeMode', _0x4c40b2);
    return _0x4c40b2;
  };
  ["autoduoDecode"] = function (_0x4ed195) {
    const _0x30b18f = _0x4ed195.slice(0xd);
    try {
      return JSON.parse(atob(_0x30b18f));
    } catch (_0x179010) {
      return null;
    }
  };
  ["autoduoError"] = function (_0x22984f) {
    if (this.isAuto) {
      this.stop();
    }
    if (this.isAutoRunning) {
      this.setAutoRunning(false);
    }
    alert("ERROR: " + _0x22984f);
  };
  ["autoduoCreateSwitch"] = function (_0x10443d = '', _0x4a7651, _0x4dd6f5, _0x22c752) {
    const _0x45b43e = document.createElement('i');
    Object.assign(_0x45b43e, {
      'className': "switch-info-listening",
      'title': "Xem th\xC3\xB4ng tin",
      'onclick': () => {
        alert(_0x10443d);
      }
    });
    const _0x23f29a = document.createElement('input');
    Object.assign(_0x23f29a, {
      'type': "checkbox",
      'hidden': true,
      'checked': _0x4dd6f5
    });
    const _0x44d0f3 = _0x3f15db => {
      _0x23f29a.checked = _0x3f15db;
    };
    const _0x3dbab7 = document.createElement("label");
    _0x3dbab7.addEventListener("click", () => {
      _0x22c752(_0x44d0f3);
    });
    _0x4a7651.classList.add("switch-wrapper-listening");
    _0x4a7651.append(_0x45b43e, _0x23f29a, _0x3dbab7);
  };
  ["showGuide"] = function () {
    alert("+++++ H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN +++++\n\n- C\xE1\xBA\xA7n c\xC3\xB3 key k\xC3\xADch ho\xE1\xBA\xA1t auto, n\xE1\xBA\xBFu kh\xC3\xB4ng c\xC3\xB3, vui l\xC3\xB2ng b\xE1\xBA\xA5m v\xC3 o n\xC3\xBAt \"LINK L\xE1\xBA\xA4Y KEY\" ho\xE1\xBA\xB7c li\xC3\xAAn h\xE1\xBB\u2021 admin\n- N\xE1\xBA\xBFu kh\xC3\xB4ng bi\xE1\xBA\xBFt c\xC3\xA1ch l\xE1\xBA\xA5y key, h\xC3\xA3y ch\xE1\xBB\x8Dn \"H\xC6\xAF\xE1\xBB\u0161NG D\xE1\xBA\xAAN L\xE1\xBA\xA4Y KEY\"\n- Key c\xC3\xB3 th\xE1\xBB\x9Di gian gi\xE1\xBB\u203Ai h\xE1\xBA\xA1n, n\xE1\xBA\xBFu key h\xE1\xBA\xBFt h\xE1\xBA\xA1n s\xE1\xBA\xBD t\xE1\xBB\xB1 \xC4\u2018\xE1\xBB\u2122ng \xC4\u2018\xE1\xBA\xA9y ra m\xC3 n h\xC3\xACnh nh\xE1\xBA\xADp key\n- Key VIP s\xE1\xBA\xBD c\xC3\xB3 th\xE1\xBB\x9Di gian l\xC3\xA2u h\xC6\xA1n v\xC3  b\xE1\xBA\xA1n s\xE1\xBA\xBD kh\xC3\xB4ng ph\xE1\xBA\xA3i v\xC6\xB0\xE1\xBB\xA3t link l\xE1\xBA\xA5y key, \xC4\u2018\xE1\xBB\u0192 xem chi ti\xE1\xBA\xBFt, h\xC3\xA3y ch\xE1\xBB\x8Dn \"\xC4\x90\xC4\u201ANG K\xC3\x9D KEY VIP\"\n- Key l\xC3  ph\xC6\xB0\xC6\xA1ng th\xE1\xBB\xA9c duy nh\xE1\xBA\xA5t gi\xC3\xBAp m\xC3\xACnh ki\xE1\xBA\xBFm th\xC3\xAAm thu nh\xE1\xBA\xADp \xC4\u2018\xE1\xBB\u0192 ti\xE1\xBA\xBFp t\xE1\xBB\xA5c v\xE1\xBB\xAFng v\xC3 ng tr\xC3\xAAn con \xC4\u2018\xC6\xB0\xE1\xBB\x9Dng ph\xC3\xA1t tri\xE1\xBB\u0192n AutoDuo, n\xC3\xAAn mong c\xC3\xA1c b\xE1\xBA\xA1n th\xC3\xB4ng c\xE1\xBA\xA3m v\xC3  \xE1\xBB\xA7ng h\xE1\xBB\u2122 m\xC3\xACnh b\xE1\xBA\xB1ng c\xC3\xA1ch t\xE1\xBB\xB1 m\xC3\xACnh v\xC6\xB0\xE1\xBB\xA3t link l\xE1\xBA\xA5y key v\xC3  kh\xC3\xB4ng chia s\xE1\xBA\xBB key cho b\xE1\xBA\xA5t k\xC3\xAC ai kh\xC3\xA1c, m\xC3\xACnh xin c\xE1\xBA\xA3m \xC6\xA1n r\xE1\xBA\xA5t nhi\xE1\xBB\x81u!\n- Tham gia nh\xC3\xB3m chat Zalo \xC4\u2018\xE1\xBB\u0192 \xC4\u2018\xC6\xB0\xE1\xBB\xA3c h\xE1\xBB\u2014 tr\xE1\xBB\xA3 v\xC3  t\xE1\xBA\xA3i nh\xE1\xBB\xAFng phi\xC3\xAAn b\xE1\xBA\xA3n m\xE1\xBB\u203Ai nh\xE1\xBA\xA5t!\n- Auto hi\xE1\xBB\u2021n t\xE1\xBA\xA1i ch\xE1\xBB\u2030 ho\xE1\xBA\xA1t \xC4\u2018\xE1\xBB\u2122ng trong kh\xC3\xB3a h\xE1\xBB\x8Dc Ti\xE1\xBA\xBFng Anh - Ti\xE1\xBA\xBFng Vi\xE1\xBB\u2021t\n\nAutoDuo Super By Dev X\xE1\xBA\xA5u!");
  };
  ["createStyle"] = function () {
    const _0x36bdcc = document.createElement('style');
    _0x36bdcc.innerHTML = "\n            .auto-container-listening{\n                position: fixed;\n                z-index: 9999999;\n                left: 20px;\n                bottom: 75px;\n\t\t\t\twidth: 220px !important;\n\t\t\t\tpadding: 8px;\n\t\t\t\tborder: 2px dotted #00b3c1;\n\t\t\t\tborder-radius: 20px;\n            }\n\t\t\t.auto-container-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tfilter: blur(52px);\n\t\t\t\tbackground-color: rgb(171 244 255 / 32%);\n\t\t\t\tz-index: -1;\n\t\t\t}\n\t\t\t.auto-listening, .dropkey-btn-listening{\n\t\t\t\twidth: 100% !important;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t\t.auto-listening.disable {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t\tpointer-events: none !important;\n\t\t\t}\n\t\t\t.auto-listening.disable::before{\n\t\t\t\tbackground-color: #9c9c9c !important;\n    \t\t\tcolor: #686868 !important;\n\t\t\t}\n\t\t\t.auto-listening.vip::before {\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vip.ndx');\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\t\t\t.auto-listening.vip.running::before{\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vip.ndx'), url('https://api.nghiane.online/autoduo/assets/thunder.ndx');\n\t\t\t\tbackground-size: contain, cover;\n\t\t\t\tbackground-position: left, right;\n\t\t\t}\n            .statistic-listening {\n                color: #0016ff;\n                font-size: 18px;\n                font-weight: bold;\n            }\n\t\t\t.statistic-listening p{\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t#total-exp-listening::before{\n                content: 'KN - ';\n            }\n            #total-exp-listening::after{\n                content: ' EXP';\n            }\n\t\t\t.time-listening::before{\n\t\t\t\tcontent: 'Time - ';\n\t\t\t}\n\n\t\t\t.key-container-listening{\n\t\t\t\tposition: fixed;\n                left: 20px;\n\t\t\t\tbottom: 75px;\n\t\t\t\twidth: 250px;\n                z-index: 99999999;\n\t\t\t\ttext-align:center;\n\t\t\t}\n\n\t\t\t.key-container-listening > * {\n\t\t\t\tfont-size: 15px !important;\n\t\t\t}\n\n\t\t\t.key-input-listening{\n                border: 2px solid #aaa;\n                width: 100%;\n                padding: 12px 8px;\n                border-radius: 8px;\n                background-color: #eee;\n            }\n\n            .key-btn-listening {\n\t\t\t\tposition: relative;\n                width: 100%;\n\t\t\t\tmargin: 6px 0;\n            }\n\t\t\t.loading-listening{\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground-color: var(--web-ui_button-background-color,rgb(var(--color-macaw)));\n    \t\t\tborder-radius: inherit;\n\t\t\t}\n            \n\t\t\t.guide-btn-listening, .getlink-btn-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: calc(50% - 3px);\n\t\t\t\tmin-width: 0;\n\t\t\t}\n\t\t\t.getlink-btn-listening{\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t\t.guide-getlink-btn-listening, .key-vip-btn-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 0;\n\t\t\t\tmargin-top: 6px;\n\t\t\t}\n\t\t\t.key-vip-btn-listening{\n\t\t\t\tcolor: yellow;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::before{\n\t\t\t\tbackground-color: #e800ff;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/twinkle.ndx');\n    \t\t\tbackground-size: 85px auto;\n\t\t\t\tcolor: #ff5de2;\n\t\t\t}\n\t\t\t.key-vip-btn-listening::after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.signature-listening{\n\t\t\t\tposition: fixed;\n                z-index: 99999999;\n\t\t\t\ttop: 4px;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tcolor: red;\n\t\t\t\tbackground-color: rgba(255, 255, 255, .5);\n\t\t\t\tfont-style: italic;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\twidth: max-content;\n\t\t\t}\n\n\t\t\t.key-type-listening::before {\n\t\t\t\tcontent: \"Type: \";\n\t\t\t}\n\t\t\t.key-expired-listening::before {\n\t\t\t\tcontent: \"HSD: \";\n\t\t\t}\n\t\t\t.vip-type-listening{\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 2px 8px;\n\t\t\t\tcolor: #ff00ff;\n\t\t\t\tbackground-color: #ffe0fd;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tborder: 2px solid #ff00ff;\n\t\t\t}\n\t\t\t.vip-type-listening::before{\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-right: 4px;\n\t\t\t\twidth: 32px;\n\t\t\t\theight: 22px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/crown.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.vip-expired-listening{\n\t\t\t\tcolor: #ff00ff;\n\t\t\t}\n\t\t\t.show-hide-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tright: 8px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tz-index: 999999999;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #00DBDE;\n\t\t\t\tbackground-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);\n\t\t\t\tborder-color: #b800c8;\n\t\t\t\t\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 32px;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.show-hide-listening.vip::before{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tinset: 0;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/vipCircle.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\t\t\t.show-hide-listening::after{\n\t\t\t\tcontent: var(--data-version);\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 0;\n\t\t\t\ttransform: translate(-50%, 120%);\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tcolor: #b800c8;\n\t\t\t}\n\t\t\t.show-hide-listening.older::after{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t.show-hide-listening i {\n\t\t\t\tposition: relative;\n\t\t\t\tflex-shrink: 0;\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/eye.svg');\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\t\t\t.show-hide-listening.hide i::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 110%;\n\t\t\t\theight: 5px;\n\t\t\t\ttransform: rotate(45deg) translateX(-3px);\n\t\t\t\tbackground-color: #c0efff;\n\t\t\t\tborder-radius: 7px;\n\t\t\t}\n\t\t\t.overlay-listening{\n\t\t\t\tposition: fixed;\n\t\t\t\tinset: 0;\n\t\t\t\tz-index: 9999\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening{\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmargin-bottom: 8px;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.disable{\n\t\t\t\topacity: .4;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t.switch-wrapper-listening.unavailable{\n\t\t\t\tcolor: #808080;\n\t\t\t}\n\t\t\t.switch-info-listening{\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-image: url('https://api.nghiane.online/autoduo/assets/infomation-icon.ndx');\n\t\t\t\tbackground-size: cover;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.switch-info-listening:hover{\n\t\t\t\tfilter: brightness(0.8);\n\t\t\t}\n\n\t\t\t.switch-wrapper-listening label{\n\t\t\t\tposition: relative;\n\t\t\t\twidth: 46px;\n\t\t\t\theight: 24px;\n\t\t\t\tbackground-color: #bbb;\n\t\t\t\tbox-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening label::after{\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 2px;\n\t\t\t\ttop: 2px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: white;\n\t\t\t\ttransition: .2s;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label{\n\t\t\t\tbackground-color: #1FC2FF;\n\t\t\t}\n\t\t\t.switch-wrapper-listening input:checked + label::after {\n\t\t\t\tleft: 100%;\n\t\t\t\ttransform: translateX(calc(-100% - 2px));\n\t\t\t}\n\n\t\t\t.safemode-wrapper::before{\n\t\t\t\tcontent: 'Safe Mode';\n\t\t\t}\n\t\t\t.legendmode-wrapper::before{\n\t\t\t\tcontent: 'Legend Mode';\n\t\t\t}\n\t\t\t\n\t\t\t.function-wrapper-listening{\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #ff4e00;\n\t\t\t}\n        ";
    document.head.appendChild(_0x36bdcc);
  };
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
function getSession() {
  const _0x53864b = sessionStorage.getItem("autoduoSuperStorageKey") || '{}';
  return JSON.parse(_0x53864b);
}
function setDataSession(_0x2af10f, _0x43cdb7) {
  const _0x1d1b68 = getSession();
  _0x1d1b68[_0x2af10f] = _0x43cdb7;
  sessionStorage.setItem("autoduoSuperStorageKey", JSON.stringify(_0x1d1b68));
}
function getDataSession(_0x369ef0) {
  const _0x1fedbd = getSession();
  return _0x1fedbd[_0x369ef0];
}
function removeDataSession() {
  sessionStorage.removeItem("autoduoSuperStorageKey");
}
function getLocal() {
  const _0x2a8bb6 = localStorage.getItem("autoduoSuperStorageKey") || '{}';
  return JSON.parse(_0x2a8bb6);
}
function setDataLocal(_0x21248e, _0x32007e) {
  const _0x2136eb = getLocal();
  _0x2136eb[_0x21248e] = _0x32007e;
  localStorage.setItem("autoduoSuperStorageKey", JSON.stringify(_0x2136eb));
}
function getDataLocal(_0x1288b9) {
  const _0x232ed2 = getLocal();
  return _0x232ed2[_0x1288b9];
}
const autoDuoSuper = new AutoDuoSuper();
autoDuoSuper.setup();

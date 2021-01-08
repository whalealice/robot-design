'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "* {\n  box-sizing: border-box;\n}\nbody {\n  font-size: 12px;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nli {\n  list-style: none;\n}\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n/*滚动条*/\n::-webkit-scrollbar {\n  margin-right: 2px;\n  width: 5px;\n  /*对垂直流动条有效*/\n  height: 5px;\n  /*对水平流动条有效*/\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: #cdd9e6;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: #b0c0d0;\n}\n";
styleInject(css_248z);

var css_248z$1 = ".robot-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-msg-wrapper {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-msg-wrapper a {\n  color: #588CE9;\n}\n.robot-msg-wrapper a:hover {\n  color: #8dbbf5;\n}\n.robot-card-wrapper {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 0 8px 8px 8px;\n  margin-top: 12px;\n  padding: 12px;\n}\n.robot-text-wrapper {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-text-wrapper a {\n  color: #588CE9;\n}\n.robot-text-wrapper a:hover {\n  color: #8dbbf5;\n}\n.robot-text-default {\n  font-size: 14px;\n}\n.robot-text-small {\n  font-size: 12px;\n}\n.robot-text-large {\n  font-size: 16px;\n}\n";
styleInject(css_248z$1);

const TextCard = (props) => {
    const { text, link, size } = props;
    if (link) {
        return (React__default['default'].createElement("div", { className: `robot-text-wrapper ${size ? `robot-text-${size}` : 'robot-text-defalut'} ` },
            React__default['default'].createElement("a", { href: link, target: '_blank', rel: 'noopener noreferrer' }, text)));
    }
    return (React__default['default'].createElement("div", { className: `robot-text-wrapper ${size ? `robot-text-${size}` : 'robot-text-default'} ` }, text));
};

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='80px' height='80px' viewBox='0 0 80 80' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 63.1 (92452) - https://sketch.com --%3e %3ctitle%3e%e5%9b%be%e6%a0%87 / %e5%ba%94%e7%94%a8%e4%b8%ad%e5%bf%83 / %e6%97%a5%e7%a8%8b%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cdefs%3e %3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='1.41638472e-14%25' id='linearGradient-1'%3e %3cstop stop-color='%23FF839F' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='%23FE494C' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient x1='100%25' y1='50%25' x2='0%25' y2='50%25' id='linearGradient-2'%3e %3cstop stop-color='white' stop-opacity='0.85' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='white' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient x1='100%25' y1='-1.57775533%25' x2='0%25' y2='-1.57775533%25' id='linearGradient-3'%3e %3cstop stop-color='white' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='white' stop-opacity='0.67578125' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient x1='100%25' y1='-1.57775533%25' x2='0%25' y2='-1.57775533%25' id='linearGradient-4'%3e %3cstop stop-color='white' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='white' stop-opacity='0.67578125' offset='100%25'%3e%3c/stop%3e %3c/linearGradient%3e %3c/defs%3e %3cg id='%e5%9b%be%e6%a0%87-/-%e5%ba%94%e7%94%a8%e4%b8%ad%e5%bf%83-/-%e6%97%a5%e7%a8%8b' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3crect id='Rectangle' fill='url(%23linearGradient-1)' x='0' y='0' width='80' height='80'%3e%3c/rect%3e %3cg id='%e7%bc%96%e7%bb%84' transform='translate(20.000000%2c 21.000000)'%3e %3cpath d='M0%2c11 L40%2c11 L40%2c31 C40%2c33.209139 38.209139%2c35 36%2c35 L4%2c35 C1.790861%2c35 2.705415e-16%2c33.209139 0%2c31 L0%2c11 L0%2c11 Z M25.0192383%2c20.4765625 C25.0192383%2c21.396489 24.8200215%2c22.3164017 24.421582%2c23.2363281 C24.0231425%2c24.1562546 23.4562537%2c25.0380817 22.7208984%2c25.8818359 C21.9855432%2c26.7255902 21.1315478%2c27.4902309 20.1588867%2c28.1757812 L17.1530273%2c27.1914062 C18.5475656%2c26.0019472 19.5788053%2c24.9033254 20.2467773%2c23.8955078 C20.0299794%2c23.9541019 19.7604508%2c23.9833984 19.4381836%2c23.9833984 C18.7233363%2c23.9833984 18.0670928%2c23.8193376 17.4694336%2c23.4912109 C16.8717744%2c23.1630843 16.3942401%2c22.6958038 16.0368164%2c22.0893555 C15.6793927%2c21.4829071 15.5006836%2c20.7959023 15.5006836%2c20.0283203 C15.5006836%2c19.4658175 15.6090809%2c18.9238307 15.8258789%2c18.4023438 C16.0426769%2c17.8808568 16.3620096%2c17.4091818 16.7838867%2c16.9873047 C17.2057638%2c16.5654276 17.7067354%2c16.2373059 18.2868164%2c16.0029297 C18.8668974%2c15.7685535 19.5026333%2c15.6513672 20.194043%2c15.6513672 C20.9674843%2c15.6513672 21.6618133%2c15.7832018 22.2770508%2c16.046875 C22.8922882%2c16.3105482 23.4005839%2c16.6708962 23.8019531%2c17.1279297 C24.2033223%2c17.5849632 24.5065419%2c18.0991182 24.7116211%2c18.6704102 C24.9167002%2c19.2417021 25.0192383%2c19.8437468 25.0192383%2c20.4765625 Z M21.8463867%2c20.0810547 C21.8463867%2c20.3154309 21.7951177%2c20.5556628 21.6925781%2c20.8017578 C21.5900385%2c21.0478528 21.4186535%2c21.2617178 21.178418%2c21.4433594 C20.9381824%2c21.6250009 20.6217793%2c21.7158203 20.2291992%2c21.7158203 C19.8131815%2c21.7158203 19.4484391%2c21.5825209 19.1349609%2c21.315918 C18.8214828%2c21.0493151 18.6647461%2c20.6376981 18.6647461%2c20.0810547 C18.6647461%2c19.8408191 18.7189448%2c19.5903333 18.8273438%2c19.3295898 C18.9357427%2c19.0688464 19.1115222%2c18.8461923 19.3546875%2c18.6616211 C19.5978528%2c18.4770499 19.9069317%2c18.3847656 20.2819336%2c18.3847656 C20.7389671%2c18.3847656 21.1139634%2c18.5473617 21.4069336%2c18.8725586 C21.6999038%2c19.1977555 21.8463867%2c19.6005835 21.8463867%2c20.0810547 Z' id='%e5%bd%a2%e7%8a%b6%e7%bb%93%e5%90%88' fill='url(%23linearGradient-2)'%3e%3c/path%3e %3cpath d='M2%2c3 L38%2c3 C39.1045695%2c3 40%2c3.8954305 40%2c5 L40%2c9 L40%2c9 L0%2c9 L0%2c5 C-1.3527075e-16%2c3.8954305 0.8954305%2c3 2%2c3 Z' id='%e7%9f%a9%e5%bd%a2%e5%a4%87%e4%bb%bd-3' fill='url(%23linearGradient-3)' opacity='0.800000012'%3e%3c/path%3e %3crect id='%e7%9f%a9%e5%bd%a2%e5%a4%87%e4%bb%bd' fill='url(%23linearGradient-4)' opacity='0.800000012' x='10' y='0' width='3' height='3'%3e%3c/rect%3e %3crect id='%e7%9f%a9%e5%bd%a2%e5%a4%87%e4%bb%bd-2' fill='url(%23linearGradient-4)' opacity='0.800000012' x='27' y='0' width='3' height='3'%3e%3c/rect%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var css_248z$2 = ".robot-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-msg-wrapper {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-msg-wrapper a {\n  color: #588CE9;\n}\n.robot-msg-wrapper a:hover {\n  color: #8dbbf5;\n}\n.robot-card-wrapper {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 0 8px 8px 8px;\n  margin-top: 12px;\n  padding: 12px;\n}\n.robot-schedule-text {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-schedule-text a {\n  color: #588CE9;\n}\n.robot-schedule-text a:hover {\n  color: #8dbbf5;\n}\n.robot-schedule-card {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 0 8px 8px 8px;\n  margin-top: 12px;\n  padding: 12px;\n}\n.robot-schedule-header {\n  display: flex;\n  height: 38px;\n  align-items: center;\n  color: #111;\n}\n.robot-schedule-header img {\n  margin-right: 8px;\n}\n.robot-schedule-item {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.robot-schedule-item > span {\n  display: inline-block;\n  font-weight: 400;\n}\n.robot-schedule-item > span > img {\n  vertical-align: -1px;\n}\n.robot-schedule-item > span:nth-child(2) {\n  margin: 0 10px 0 6px;\n  color: #888;\n}\n.robot-schedule-item > span:nth-child(3) {\n  color: #111;\n  flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-schedule-default .robot-schedule-header img {\n  width: 22px;\n  height: 22px;\n  border-radius: 4px;\n}\n.robot-schedule-default .robot-schedule-header span {\n  font-size: 14px;\n  font-weight: 400;\n}\n.robot-schedule-default .robot-schedule-item {\n  font-size: 14px;\n  height: 34px;\n}\n.robot-schedule-small .robot-schedule-header img {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n}\n.robot-schedule-small .robot-schedule-header span {\n  font-size: 14px;\n  font-weight: 400;\n}\n.robot-schedule-small .robot-schedule-item {\n  font-size: 12px;\n  height: 28px;\n}\n.robot-schedule-large .robot-schedule-header img {\n  width: 26px;\n  height: 26px;\n  border-radius: 4px;\n}\n.robot-schedule-large .robot-schedule-header span {\n  font-size: 16px;\n  font-weight: 400;\n}\n.robot-schedule-large .robot-schedule-item {\n  font-size: 16px;\n  height: 40px;\n}\n";
styleInject(css_248z$2);

const ScheduleCard = (props) => {
    const { title, text, showData, size, width } = props;
    return (React__default['default'].createElement("div", { className: `${size ? `robot-schedule-${size}` : 'robot-schedule-default'} ` },
        React__default['default'].createElement(TextCard, { text: text, size: size ? size : 'default' }),
        React__default['default'].createElement("div", { className: 'robot-schedule-card', style: { width: width ? `${width}px` : '260px' } },
            React__default['default'].createElement("div", { className: 'robot-schedule-header' },
                React__default['default'].createElement("img", { src: img, alt: title || '日程' }),
                React__default['default'].createElement("span", null, title || '这是标题')),
            showData && showData.map((item, index) => {
                return React__default['default'].createElement("div", { className: 'robot-schedule-item', key: index },
                    React__default['default'].createElement("span", null,
                        React__default['default'].createElement("img", { src: item.img || 'https://iuap-aiplatform-picdoc.oss-cn-beijing.aliyuncs.com/webrobotresource/img/topic.svg', alt: '主题' })),
                    React__default['default'].createElement("span", null, item.title),
                    React__default['default'].createElement("span", null, item.text));
            }))));
};

var css_248z$3 = ".robot-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-msg-wrapper {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-msg-wrapper a {\n  color: #588CE9;\n}\n.robot-msg-wrapper a:hover {\n  color: #8dbbf5;\n}\n.robot-card-wrapper {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 0 8px 8px 8px;\n  margin-top: 12px;\n  padding: 12px;\n}\n-radio {\n  width: 14px;\n  height: 14px;\n  appearance: none;\n  position: relative;\n  outline: none;\n  display: inline-flex;\n}\n-radio:before {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  border: 1px solid #d9d9d9;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n-radio:checked:before {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  border: 1px solid #111;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n-radio:checked:after {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  text-align: center;\n  background: #EE2223;\n  border-radius: 50%;\n  display: block;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n}\n-radio:checked + label {\n  color: #edd19d;\n  border-color: red;\n}\n";
styleInject(css_248z$3);

var Radio = function Radio(props) {
  var className = props.className,
      value = props.value,
      label = props.label,
      defaultChecked = props.defaultChecked;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "radio",
    name: "listradio",
    value: value,
    label: label,
    defaultChecked: defaultChecked
  }), /*#__PURE__*/React__default['default'].createElement("div", null, props.label));
}; // 父级组件


var RadioGroup = function RadioGroup(props) {
  var _onChange = props.onChange,
      defaultValue = props.defaultValue,
      className = props.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    onChange: function onChange(e) {
      _onChange(e);
    },
    className: className
  }, React__default['default'].Children.map(props.children, function (child) {
    return /*#__PURE__*/React__default['default'].cloneElement(child, {
      label: child.props.children,
      value: child.props.value,
      defaultChecked: child.props.value === defaultValue
    });
  }));
};

var css_248z$4 = ".robot-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-msg-wrapper {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n}\n.robot-msg-wrapper a {\n  color: #588CE9;\n}\n.robot-msg-wrapper a:hover {\n  color: #8dbbf5;\n}\n.robot-card-wrapper {\n  width: 100%;\n  background: #ffffff;\n  border-radius: 0 8px 8px 8px;\n  margin-top: 12px;\n  padding: 12px;\n}\n.robot-list-body {\n  padding: 10px;\n  align-self: flex-start;\n  width: 100%;\n}\n.robot-list-card {\n  display: inline-flex;\n  width: auto;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n  color: #111;\n  border-radius: 0 7px 7px;\n  background-color: #ffffff;\n  margin-top: 6px;\n  padding: 6px 10px;\n  display: flex;\n  flex-direction: column;\n}\n.robot-list-card a {\n  color: #588CE9;\n}\n.robot-list-card a:hover {\n  color: #8dbbf5;\n}\n.robot-list-title {\n  width: 100%;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  color: #111;\n  border-bottom: 1px solid #E6E6E6;\n}\n.robot-list-footer {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  border-top: 1px solid #E6E6E6;\n}\n.robot-list-footer > span {\n  display: inline-flex;\n  justify-content: center;\n  position: relative;\n  flex: 0 0 50%;\n  cursor: pointer;\n}\n.robot-list-footer > span:first-child {\n  color: #47BAEE;\n}\n.robot-list-footer > span:first-child::after {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 15px;\n  background: #E6E6E6;\n  top: 0;\n  right: 0;\n}\n.robot-list-option {\n  display: flex;\n  height: 36px;\n  color: #2A3038;\n  font-size: 12px;\n  align-items: center;\n}\n.robot-list-option > div {\n  width: 100%;\n  line-height: 36px;\n  margin-left: 6px;\n  border-bottom: 1px solid #E2E2E2;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.robot-list-option:last-child > div {\n  border-bottom: none;\n}\n.robot-list-button {\n  padding: 12px;\n  margin: 10px 0 0 10px;\n  border-radius: 4px;\n  align-self: flex-start;\n  border: 1px solid #ddd;\n  background: #fff;\n  cursor: pointer;\n}\n.robot-list-button:hover {\n  background: #ddd;\n}\n.robot-list-default .robot-list-title {\n  font-size: 14px;\n}\n.robot-list-small .robot-list-title {\n  font-size: 12px;\n}\n.robot-list-large .robot-list-title {\n  font-size: 16px;\n}\n";
styleInject(css_248z$4);

const ListCard = (props) => {
    const { text, size, width, type, listData } = props;
    // const { text, showData: { content }, modelID, nodeId, contextid } = t
    // const { modelData, showData: { listData } } = content
    // const [row, setRow] = useState(0)
    // const [radioVal, setRadioVal] = useState('')
    // const [checkboxVal, setCheckboxVal] = useState([])
    // useEffect(() => {
    // 	setRow(modelData.row)
    // }, [modelData, setRow])
    // const onClickSure = useCallback(() => {
    // 	if (
    // 		(modelID === 102 && !radioVal) ||
    // 		(modelID === 103 && !checkboxVal.length)
    // 	) {
    // 		return
    // 	}
    // 	const params = {
    // 		msg: modelID === 102 ? radioVal : checkboxVal.join(','),
    // 		askForCanvasNodeId: nodeId,
    // 		askForContextId: contextid,
    // 		sendRightMsg: true,
    // 	}
    // 	clickToSend(params)
    // }, [
    // 	modelID,
    // 	radioVal,
    // 	checkboxVal,
    // 	nodeId,
    // 	contextid,
    // 	clickToSend,
    // ])
    // const showMore = useCallback(() => {
    // 	setRow((r) => r + 3)
    // }, [setRow])
    // const radioChange = useCallback(
    // 	(e) => {
    // 		setRadioVal(e.target.value)
    // 	},
    // 	[setRadioVal]
    // )
    // const checkboxChange = useCallback(
    // 	(value) => {
    // 		setCheckboxVal(value)
    // 	},
    // 	[setCheckboxVal]
    // )
    // const renderListBody = useCallback(() => {
    // 	if (modelID === 102) {
    // 		return (
    // 			<Radio.Group onChange={radioChange} value={radioVal}>
    // 				{listData.map((item, index) => {
    // 					const {
    // 						itemclickParam: { text },
    // 					} = item
    // 					if(index < row) {
    // 						return (
    // 							<div
    // 								key={`options-${index}`}
    // 								className={'xiaoyou-list-option'}
    // 							>
    // 								<Radio value={text} />
    // 								<div title={item.name}>{item.name}</div>
    // 							</div>
    // 						)
    // 					}
    // 				})}
    // 			</Radio.Group>
    // 		)
    // 	}
    // 	return (
    // 		<Checkbox.Group onChange={checkboxChange} value={checkboxVal}>
    // 			{listData.map((item, index) => {
    // 				if (index < row) {
    // 					return (
    // 						<div
    // 							key={`options-${index}`}
    // 							className={'xiaoyou-list-option'}
    // 						>
    // 							<Checkbox value={item.itemclickParam.text} />
    // 							<div title={item.name}>{item.name}</div>
    // 						</div>
    // 					)
    // 				}
    // 			})}
    // 		</Checkbox.Group>
    // 	)
    // }, [
    // 	modelID,
    // 	listData,
    // 	row,
    // 	radioVal,
    // 	checkboxVal,
    // 	radioChange,
    // 	checkboxChange,
    // ])
    const onGroupChange = (e) => {
        console.log('ffff', e.target.value);
    };
    return (React__default['default'].createElement("div", { className: `${size ? `robot-list-${size}` : 'robot-list-default'} ` },
        React__default['default'].createElement(TextCard, { text: text, size: size ? size : 'default' }),
        React__default['default'].createElement("div", { className: 'robot-list-card', style: { width: width ? `${width}px` : '260px' } },
            React__default['default'].createElement("div", { className: 'robot-list-title' }, "\u9009\u62E9\u5217\u8868"),
            React__default['default'].createElement("div", { className: 'robot-list-body' }, type === 'radio' ?
                React__default['default'].createElement(RadioGroup, { name: "listRadio", onChange: (e) => onGroupChange(e) }, listData && listData.map((item) => {
                    return React__default['default'].createElement(Radio, { value: item.value, className: 'robot-list-option' }, item.label);
                }))
                // <form ref={radioForm as React.RefObject<HTMLInputElement>}>
                // 	{listData && listData.map((item, index)=>{
                // 		if(pageSize && index < pageSize){
                // 			return (
                // 				<div
                // 					key={`options-${index}`}
                // 					className={'robot-list-option'}
                // 				>
                // 					<input type="radio" name="listradio" id={item.value} className={'robot-list-radio'}></input>
                // 					<div title={item.name}>{item.name}</div>
                // 				</div>
                // 			)
                // 		}else{
                // 			return (
                // 				<div
                // 					key={`options-${index}`}
                // 					className={'robot-list-option'}
                // 				>
                // 					<input type="radio" name="listradio" id={item.value}className={'robot-list-radio'}></input>
                // 					<div title={item.name}>{item.name}</div>
                // 				</div>
                // 			)
                // 		}
                // 	})}
                // </form>
                : null),
            React__default['default'].createElement("div", { className: 'robot-list-footer' }))));
};

exports.ListCard = ListCard;
exports.ScheduleCard = ScheduleCard;
exports.TextCard = TextCard;

import {
  h,
  m,
  u
} from "/build/_shared/chunk-BWK6FPRY.js";
import {
  require_react,
  useLocation,
  useMatches
} from "/build/_shared/chunk-USLGO4WK.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx8 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx8;
        exports.jsxs = jsxs2;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/@shopify/hydrogen-react/dist/browser-prod/flatten-connection.mjs
function flattenConnection(connection) {
  if (!connection) {
    const noConnectionErr = `flattenConnection(): needs a 'connection' to flatten, but received '${connection ?? ""}' instead.`;
    {
      console.error(noConnectionErr + ` Returning an empty array`);
      return [];
    }
  }
  if ("nodes" in connection) {
    return connection.nodes;
  }
  if ("edges" in connection && Array.isArray(connection.edges)) {
    return connection.edges.map((edge) => {
      if (!(edge == null ? void 0 : edge.node)) {
        throw new Error(
          "flattenConnection(): Connection edges must contain nodes"
        );
      }
      return edge.node;
    });
  }
  return [];
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/analytics-constants.mjs
var AnalyticsEventName = {
  PAGE_VIEW: "PAGE_VIEW",
  ADD_TO_CART: "ADD_TO_CART"
};
var AnalyticsPageType = {
  article: "article",
  blog: "blog",
  captcha: "captcha",
  cart: "cart",
  collection: "collection",
  customersAccount: "customers/account",
  customersActivateAccount: "customers/activate_account",
  customersAddresses: "customers/addresses",
  customersLogin: "customers/login",
  customersOrder: "customers/order",
  customersRegister: "customers/register",
  customersResetPassword: "customers/reset_password",
  giftCard: "gift_card",
  home: "index",
  listCollections: "list-collections",
  forbidden: "403",
  notFound: "404",
  page: "page",
  password: "password",
  product: "product",
  policy: "policy",
  search: "search"
};
var ShopifySalesChannel = {
  hydrogen: "hydrogen",
  headless: "headless"
};
var ShopifyAppId = {
  hydrogen: "6167201",
  headless: "12875497473"
};

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/storefront-api-constants.mjs
var SFAPI_VERSION = "2023-01";

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopifyProvider.mjs
var ShopifyContext = (0, import_react.createContext)({
  storeDomain: "test",
  storefrontToken: "abc123",
  storefrontApiVersion: SFAPI_VERSION,
  countryIsoCode: "US",
  languageIsoCode: "EN",
  getStorefrontApiUrl() {
    return "";
  },
  getPublicTokenHeaders() {
    return {};
  },
  getShopifyDomain() {
    return "";
  }
});
function useShop() {
  const shopContext = (0, import_react.useContext)(ShopifyContext);
  if (!shopContext) {
    throw new Error(`'useShop()' must be a descendent of <ShopifyProvider/>`);
  }
  return shopContext;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useMoney.mjs
function useMoney(money) {
  const { countryIsoCode, languageIsoCode } = useShop();
  const locale = `${languageIsoCode}-${countryIsoCode}`;
  if (!locale) {
    throw new Error(
      `useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work`
    );
  }
  const amount = parseFloat(money.amount);
  const options = (0, import_react2.useMemo)(
    () => ({
      style: "currency",
      currency: money.currencyCode
    }),
    [money.currencyCode]
  );
  const defaultFormatter = useLazyFormatter(locale, options);
  const nameFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "name"
  });
  const narrowSymbolFormatter = useLazyFormatter(locale, {
    ...options,
    currencyDisplay: "narrowSymbol"
  });
  const withoutTrailingZerosFormatter = useLazyFormatter(locale, {
    ...options,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const withoutCurrencyFormatter = useLazyFormatter(locale);
  const withoutTrailingZerosOrCurrencyFormatter = useLazyFormatter(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const isPartCurrency = (part) => part.type === "currency";
  const lazyFormatters = (0, import_react2.useMemo)(
    () => ({
      original: () => money,
      currencyCode: () => money.currencyCode,
      localizedString: () => defaultFormatter().format(amount),
      parts: () => defaultFormatter().formatToParts(amount),
      withoutTrailingZeros: () => amount % 1 === 0 ? withoutTrailingZerosFormatter().format(amount) : defaultFormatter().format(amount),
      withoutTrailingZerosAndCurrency: () => amount % 1 === 0 ? withoutTrailingZerosOrCurrencyFormatter().format(amount) : withoutCurrencyFormatter().format(amount),
      currencyName: () => {
        var _a;
        return ((_a = nameFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      currencySymbol: () => {
        var _a;
        return ((_a = defaultFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? money.currencyCode;
      },
      currencyNarrowSymbol: () => {
        var _a;
        return ((_a = narrowSymbolFormatter().formatToParts(amount).find(isPartCurrency)) == null ? void 0 : _a.value) ?? "";
      },
      amount: () => defaultFormatter().formatToParts(amount).filter(
        (part) => ["decimal", "fraction", "group", "integer", "literal"].includes(
          part.type
        )
      ).map((part) => part.value).join("")
    }),
    [
      money,
      amount,
      nameFormatter,
      defaultFormatter,
      narrowSymbolFormatter,
      withoutCurrencyFormatter,
      withoutTrailingZerosFormatter,
      withoutTrailingZerosOrCurrencyFormatter
    ]
  );
  return (0, import_react2.useMemo)(
    () => new Proxy(lazyFormatters, {
      get: (target, key) => {
        var _a;
        return (_a = Reflect.get(target, key)) == null ? void 0 : _a.call(null);
      }
    }),
    [lazyFormatters]
  );
}
function useLazyFormatter(locale, options) {
  return (0, import_react2.useMemo)(() => {
    let memoized;
    return () => memoized ?? (memoized = new Intl.NumberFormat(locale, options));
  }, [locale, options]);
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Money.mjs
function Money({
  data,
  as,
  withoutCurrency,
  withoutTrailingZeros,
  measurement,
  measurementSeparator = "/",
  ...passthroughProps
}) {
  if (!isMoney(data)) {
    throw new Error(
      `<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'`
    );
  }
  const moneyObject = useMoney(data);
  const Wrapper = as ?? "div";
  let output = moneyObject.localizedString;
  if (withoutCurrency || withoutTrailingZeros) {
    if (withoutCurrency && !withoutTrailingZeros) {
      output = moneyObject.amount;
    } else if (!withoutCurrency && withoutTrailingZeros) {
      output = moneyObject.withoutTrailingZeros;
    } else {
      output = moneyObject.withoutTrailingZerosAndCurrency;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Wrapper, { ...passthroughProps, children: [
    output,
    measurement && measurement.referenceUnit && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      measurementSeparator,
      measurement.referenceUnit
    ] })
  ] });
}
function isMoney(maybeMoney) {
  return typeof maybeMoney.amount === "string" && !!maybeMoney.amount && typeof maybeMoney.currencyCode === "string" && !!maybeMoney.currencyCode;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Image.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/image-size.mjs
var PRODUCTION_CDN_HOSTNAMES = [
  "cdn.shopify.com",
  "cdn.shopifycdn.net",
  "shopify-assets.shopifycdn.com",
  "shopify-assets.shopifycdn.net"
];
var LOCAL_CDN_HOSTNAMES = ["spin.dev"];
var ALL_CDN_HOSTNAMES = [...PRODUCTION_CDN_HOSTNAMES, ...LOCAL_CDN_HOSTNAMES];
var IMG_SRC_SET_SIZES = [352, 832, 1200, 1920, 2560];
function addImageSizeParametersToUrl({
  src,
  width,
  height,
  crop,
  scale
}) {
  const newUrl = new URL(src);
  const multipliedScale = scale ?? 1;
  if (width) {
    let finalWidth;
    if (typeof width === "string") {
      finalWidth = (IMG_SRC_SET_SIZES[0] * multipliedScale).toString();
    } else {
      finalWidth = (Number(width) * multipliedScale).toString();
    }
    newUrl.searchParams.append("width", finalWidth);
  }
  if (height && typeof height === "number") {
    newUrl.searchParams.append("height", (height * multipliedScale).toString());
  }
  crop && newUrl.searchParams.append("crop", crop);
  return newUrl.toString();
}
function shopifyImageLoader(params) {
  const newSrc = new URL(params.src);
  const isShopifyServedImage = ALL_CDN_HOSTNAMES.some(
    (allowedHostname) => newSrc.hostname.endsWith(allowedHostname)
  );
  if (!isShopifyServedImage || !params.width && !params.height && !params.crop && !params.scale) {
    return params.src;
  }
  return addImageSizeParametersToUrl(params);
}
function getShopifyImageDimensions({
  data: sfapiImage,
  loaderOptions,
  elementProps
}) {
  let aspectRatio = null;
  if ((sfapiImage == null ? void 0 : sfapiImage.width) && (sfapiImage == null ? void 0 : sfapiImage.height)) {
    aspectRatio = (sfapiImage == null ? void 0 : sfapiImage.width) / (sfapiImage == null ? void 0 : sfapiImage.height);
  }
  if ((loaderOptions == null ? void 0 : loaderOptions.width) || (loaderOptions == null ? void 0 : loaderOptions.height)) {
    return {
      width: (loaderOptions == null ? void 0 : loaderOptions.width) ?? (aspectRatio && typeof loaderOptions.height === "number" ? Math.round(aspectRatio * loaderOptions.height) : null),
      height: (loaderOptions == null ? void 0 : loaderOptions.height) ?? (aspectRatio && typeof loaderOptions.width === "number" ? Math.round(aspectRatio * loaderOptions.width) : null)
    };
  }
  if ((elementProps == null ? void 0 : elementProps.width) || (elementProps == null ? void 0 : elementProps.height)) {
    return {
      width: (elementProps == null ? void 0 : elementProps.width) ?? (aspectRatio && typeof elementProps.height === "number" ? Math.round(aspectRatio * elementProps.height) : null),
      height: (elementProps == null ? void 0 : elementProps.height) ?? (aspectRatio && typeof elementProps.width === "number" ? Math.round(aspectRatio * elementProps.width) : null)
    };
  }
  if ((sfapiImage == null ? void 0 : sfapiImage.width) || (sfapiImage == null ? void 0 : sfapiImage.height)) {
    return {
      width: (sfapiImage == null ? void 0 : sfapiImage.width) ?? null,
      height: (sfapiImage == null ? void 0 : sfapiImage.height) ?? null
    };
  }
  return { width: null, height: null };
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Image.mjs
function Image({
  data,
  width,
  height,
  loading,
  loader = shopifyImageLoader,
  loaderOptions,
  widths,
  decoding = "async",
  ...rest
}) {
  if (!data.url) {
    const missingUrlError = `<Image/>: the 'data' prop requires the 'url' property. Image: ${data.id ?? "no ID provided"}`;
    {
      console.error(missingUrlError);
    }
    return null;
  }
  const { width: imgElementWidth, height: imgElementHeight } = getShopifyImageDimensions({
    data,
    loaderOptions,
    elementProps: {
      width,
      height
    }
  });
  let finalSrc = data.url;
  if (loader) {
    finalSrc = loader({
      ...loaderOptions,
      src: data.url,
      width: imgElementWidth,
      height: imgElementHeight
    });
    if (typeof finalSrc !== "string" || !finalSrc) {
      throw new Error(
        `<Image/>: 'loader' did not return a valid string. Image: ${data.id ?? data.url}`
      );
    }
  }
  const maxWidth = width && imgElementWidth && width < imgElementWidth ? width : imgElementWidth;
  const finalSrcset = rest.srcSet ?? internalImageSrcSet({
    ...loaderOptions,
    widths,
    src: data.url,
    width: maxWidth,
    height: imgElementHeight,
    loader
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "img",
    {
      id: data.id ?? "",
      alt: data.altText ?? rest.alt ?? "",
      loading: loading ?? "lazy",
      ...rest,
      src: finalSrc,
      width: imgElementWidth ?? void 0,
      height: imgElementHeight ?? void 0,
      srcSet: finalSrcset,
      decoding
    }
  );
}
function internalImageSrcSet({
  src,
  width,
  crop,
  scale,
  widths,
  loader,
  height
}) {
  const hasCustomWidths = widths && Array.isArray(widths);
  if (hasCustomWidths && widths.some((size) => isNaN(size))) {
    throw new Error(
      `<Image/>: the 'widths' must be an array of numbers. Image: ${src}`
    );
  }
  let aspectRatio = 1;
  if (width && height) {
    aspectRatio = Number(height) / Number(width);
  }
  let setSizes = hasCustomWidths ? widths : IMG_SRC_SET_SIZES;
  if (!hasCustomWidths && width && width < IMG_SRC_SET_SIZES[IMG_SRC_SET_SIZES.length - 1]) {
    setSizes = IMG_SRC_SET_SIZES.filter((size) => size <= width);
  }
  const srcGenerator = loader ? loader : addImageSizeParametersToUrl;
  return setSizes.map(
    (size) => `${srcGenerator({
      src,
      width: size,
      height: crop ? Number(size) * aspectRatio : void 0,
      crop,
      scale
    })} ${size ?? ""}w`
  ).join(", ");
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopPayButton.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/load-script.mjs
var import_react3 = __toESM(require_react(), 1);
var SCRIPTS_LOADED = {};
function loadScript(src, options) {
  const isScriptLoaded = SCRIPTS_LOADED[src];
  if (isScriptLoaded) {
    return isScriptLoaded;
  }
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    if (options == null ? void 0 : options.module) {
      script.type = "module";
    } else {
      script.type = "text/javascript";
    }
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    if ((options == null ? void 0 : options.in) === "head") {
      document.head.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  });
  SCRIPTS_LOADED[src] = promise;
  return promise;
}
function useLoadScript(url, options) {
  const [status, setStatus] = (0, import_react3.useState)("loading");
  const stringifiedOptions = JSON.stringify(options);
  (0, import_react3.useEffect)(() => {
    async function loadScriptWrapper() {
      try {
        setStatus("loading");
        await loadScript(url, options);
        setStatus("done");
      } catch (error) {
        setStatus("error");
      }
    }
    loadScriptWrapper().catch(() => {
      setStatus("error");
    });
  }, [url, stringifiedOptions, options]);
  return status;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/analytics-utils.mjs
function schemaWrapper(schemaId, payload) {
  return {
    schema_id: schemaId,
    payload,
    metadata: {
      event_created_at_ms: Date.now()
    }
  };
}
function parseGid(gid) {
  const defaultReturn = { id: "", resource: null };
  if (typeof gid !== "string") {
    return defaultReturn;
  }
  const matches = gid.match(/^gid:\/\/shopify\/(\w+)\/([a-z0-9]+)/);
  if (!matches || matches.length === 1) {
    return defaultReturn;
  }
  const id = matches[2] ?? null;
  const resource = matches[1] ?? null;
  return { id, resource };
}
function addDataIf(keyValuePairs, formattedData) {
  if (typeof keyValuePairs !== "object") {
    return {};
  }
  Object.entries(keyValuePairs).forEach(([key, value]) => {
    if (value) {
      formattedData[key] = value;
    }
  });
  return formattedData;
}
function errorIfServer(fnName) {
  if (typeof document === "undefined") {
    console.error(
      `${fnName} should only be used within the useEffect callback or event handlers`
    );
    return true;
  }
  return false;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ShopPayButton.mjs
var SHOPJS_URL = "https://cdn.shopify.com/shopifycloud/shop-js/v1.0/client.js";
function ShopPayButton({
  variantIds,
  className,
  variantIdsAndQuantities,
  width
}) {
  const { storeDomain } = useShop();
  const shopPayLoadedStatus = useLoadScript(SHOPJS_URL);
  let ids = [];
  if (variantIds && variantIdsAndQuantities) {
    throw new Error(DoublePropsErrorMessage);
  }
  if (variantIds) {
    ids = variantIds.reduce((prev, curr) => {
      const bareId = parseGid(curr).id;
      if (bareId) {
        prev.push(bareId);
      }
      return prev;
    }, []);
  } else if (variantIdsAndQuantities) {
    ids = variantIdsAndQuantities.reduce((prev, curr) => {
      const bareId = parseGid(curr == null ? void 0 : curr.id).id;
      if (bareId) {
        prev.push(`${bareId}:${(curr == null ? void 0 : curr.quantity) ?? 1}`);
      }
      return prev;
    }, []);
  } else {
    throw new Error(MissingPropsErrorMessage);
  }
  if (ids.length === 0) {
    throw new Error(InvalidPropsErrorMessage);
  }
  const style = width ? {
    "--shop-pay-button-width": width
  } : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className, style, children: shopPayLoadedStatus === "done" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("shop-pay-button", { "store-url": storeDomain, variants: ids.join(",") }) });
}
var InvalidPropsErrorMessage = `You must pass in "variantIds" in the form of ["gid://shopify/ProductVariant/1"]`;
var MissingPropsErrorMessage = `You must pass in either "variantIds" or "variantIdsAndQuantities" to ShopPayButton`;
var DoublePropsErrorMessage = `You must provide either a variantIds or variantIdsAndQuantities prop, but not both in the ShopPayButton component`;

// node_modules/@shopify/hydrogen-react/dist/browser-prod/cart-constants.mjs
var SHOPIFY_Y = "_shopify_y";
var SHOPIFY_S = "_shopify_s";

// node_modules/worktop/cookie/index.mjs
var g = /* @__PURE__ */ new Set([
  "domain",
  "path",
  "max-age",
  "expires",
  "samesite",
  "secure",
  "httponly"
]);
function u2(a) {
  let r = {}, e, t, n = 0, m2 = a.split(/;\s*/g), s, i;
  for (; n < m2.length; n++)
    if (t = m2[n], e = t.indexOf("="), ~e) {
      if (s = t.substring(0, e++).trim(), i = t.substring(e).trim(), i[0] === '"' && (i = i.substring(1, i.length - 1)), ~i.indexOf("%"))
        try {
          i = decodeURIComponent(i);
        } catch (f) {
        }
      g.has(t = s.toLowerCase()) ? t === "expires" ? r.expires = new Date(i) : t === "max-age" ? r.maxage = +i : r[t] = i : r[s] = i;
    } else
      (s = t.trim().toLowerCase()) && (s === "httponly" || s === "secure") && (r[s] = true);
  return r;
}
function l(a, r, e = {}) {
  let t = a + "=" + encodeURIComponent(r);
  return e.expires && (t += "; Expires=" + new Date(e.expires).toUTCString()), e.maxage != null && e.maxage >= 0 && (t += "; Max-Age=" + (e.maxage | 0)), e.domain && (t += "; Domain=" + e.domain), e.path && (t += "; Path=" + e.path), e.samesite && (t += "; SameSite=" + e.samesite), (e.secure || e.samesite === "None") && (t += "; Secure"), e.httponly && (t += "; HttpOnly"), t;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/cookies-utils.mjs
var tokenHash = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
function buildUUID() {
  let hash = "";
  try {
    const crypto2 = window.crypto;
    const randomValuesArray = new Uint16Array(31);
    crypto2.getRandomValues(randomValuesArray);
    let i = 0;
    hash = tokenHash.replace(/[x]/g, (c) => {
      const r = randomValuesArray[i] % 16;
      const v2 = c === "x" ? r : r & 3 | 8;
      i++;
      return v2.toString(16);
    }).toUpperCase();
  } catch (err) {
    hash = tokenHash.replace(/[x]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v2 = c === "x" ? r : r & 3 | 8;
      return v2.toString(16);
    }).toUpperCase();
  }
  return `${hexTime()}-${hash}`;
}
function hexTime() {
  let dateNumber = 0;
  let perfNumber = 0;
  dateNumber = new Date().getTime() >>> 0;
  try {
    perfNumber = performance.now() >>> 0;
  } catch (err) {
    perfNumber = 0;
  }
  const output = Math.abs(dateNumber + perfNumber).toString(16).toLowerCase();
  return output.padStart(8 - output.length, "0");
}
function getShopifyCookies(cookies) {
  const cookieData = u2(cookies);
  return {
    [SHOPIFY_Y]: cookieData[SHOPIFY_Y] || "",
    [SHOPIFY_S]: cookieData[SHOPIFY_S] || ""
  };
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/analytics-schema-trekkie-storefront-page-view.mjs
var SCHEMA_ID = "trekkie_storefront_page_view/1.4";
var OXYGEN_DOMAIN = "myshopify.dev";
function pageView(payload) {
  const pageViewPayload = payload;
  const { id, resource } = parseGid(pageViewPayload.resourceId);
  const resourceType = resource ? resource.toLowerCase() : void 0;
  return [
    schemaWrapper(
      SCHEMA_ID,
      addDataIf(
        {
          pageType: pageViewPayload.pageType,
          customerId: pageViewPayload.customerId,
          resourceType,
          resourceId: parseInt(id)
        },
        formatPayload(pageViewPayload)
      )
    )
  ];
}
function formatPayload(payload) {
  return {
    appClientId: payload.shopifySalesChannel ? ShopifyAppId[payload.shopifySalesChannel] : ShopifyAppId.headless,
    isMerchantRequest: isMerchantRequest(payload.url),
    hydrogenSubchannelId: payload.storefrontId || "0",
    isPersistentCookie: payload.hasUserConsent,
    uniqToken: payload.uniqueToken,
    visitToken: payload.visitToken,
    microSessionId: buildUUID(),
    microSessionCount: 1,
    url: payload.url,
    path: payload.path,
    search: payload.search,
    referrer: payload.referrer,
    title: payload.title,
    shopId: parseInt(parseGid(payload.shopId).id),
    currency: payload.currency,
    contentLanguage: payload.acceptedLanguage || "en"
  };
}
function isMerchantRequest(url) {
  if (typeof url !== "string") {
    return false;
  }
  const hostname = new URL(url).hostname;
  if (hostname.indexOf(OXYGEN_DOMAIN) !== -1 || hostname === "localhost") {
    return true;
  }
  return false;
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/analytics-schema-custom-storefront-customer-tracking.mjs
var SCHEMA_ID2 = "custom_storefront_customer_tracking/1.0";
var PAGE_RENDERED_EVENT_NAME = "page_rendered";
var COLLECTION_PAGE_RENDERED_EVENT_NAME = "collection_page_rendered";
var PRODUCT_PAGE_RENDERED_EVENT_NAME = "product_page_rendered";
var PRODUCT_ADDED_TO_CART_EVENT_NAME = "product_added_to_cart";
var SEARCH_SUBMITTED_EVENT_NAME = "search_submitted";
function pageView2(payload) {
  const pageViewPayload = payload;
  const additionalPayload = {
    canonical_url: pageViewPayload.canonicalUrl || pageViewPayload.url,
    customer_id: pageViewPayload.customerId
  };
  const pageType = pageViewPayload.pageType;
  const pageViewEvents = [];
  pageViewEvents.push(
    schemaWrapper(
      SCHEMA_ID2,
      addDataIf(
        {
          event_name: PAGE_RENDERED_EVENT_NAME,
          ...additionalPayload
        },
        formatPayload2(pageViewPayload)
      )
    )
  );
  switch (pageType) {
    case AnalyticsPageType.collection:
      pageViewEvents.push(
        schemaWrapper(
          SCHEMA_ID2,
          addDataIf(
            {
              event_name: COLLECTION_PAGE_RENDERED_EVENT_NAME,
              ...additionalPayload,
              collection_name: pageViewPayload.collectionHandle
            },
            formatPayload2(pageViewPayload)
          )
        )
      );
      break;
    case AnalyticsPageType.product:
      pageViewEvents.push(
        schemaWrapper(
          SCHEMA_ID2,
          addDataIf(
            {
              event_name: PRODUCT_PAGE_RENDERED_EVENT_NAME,
              ...additionalPayload,
              products: formatProductPayload(pageViewPayload.products),
              total_value: pageViewPayload.totalValue
            },
            formatPayload2(pageViewPayload)
          )
        )
      );
      break;
    case AnalyticsPageType.search:
      pageViewEvents.push(
        schemaWrapper(
          SCHEMA_ID2,
          addDataIf(
            {
              event_name: SEARCH_SUBMITTED_EVENT_NAME,
              ...additionalPayload,
              search_string: pageViewPayload.searchString
            },
            formatPayload2(pageViewPayload)
          )
        )
      );
      break;
  }
  return pageViewEvents;
}
function addToCart(payload) {
  const addToCartPayload = payload;
  const cartToken = parseGid(addToCartPayload.cartId);
  const cart_token = (cartToken == null ? void 0 : cartToken.id) ? `${cartToken.id}` : null;
  return [
    schemaWrapper(
      SCHEMA_ID2,
      addDataIf(
        {
          event_name: PRODUCT_ADDED_TO_CART_EVENT_NAME,
          customerId: addToCartPayload.customerId,
          cart_token,
          total_value: addToCartPayload.totalValue,
          products: formatProductPayload(addToCartPayload.products)
        },
        formatPayload2(addToCartPayload)
      )
    )
  ];
}
function formatPayload2(payload) {
  return {
    source: payload.shopifySalesChannel || ShopifySalesChannel.headless,
    hydrogenSubchannelId: payload.storefrontId || "0",
    is_persistent_cookie: payload.hasUserConsent,
    ccpa_enforced: false,
    gdpr_enforced: false,
    unique_token: payload.uniqueToken,
    event_time: Date.now(),
    event_id: buildUUID(),
    event_source_url: payload.url,
    referrer: payload.referrer,
    user_agent: payload.userAgent,
    navigation_type: payload.navigationType,
    navigation_api: payload.navigationApi,
    shop_id: parseInt(parseGid(payload.shopId).id),
    currency: payload.currency
  };
}
function formatProductPayload(products) {
  return products ? products.map((p) => {
    const product = addDataIf(
      {
        variant_gid: p.variantGid,
        category: p.category,
        sku: p.sku,
        product_id: parseInt(parseGid(p.productGid).id),
        variant_id: parseInt(parseGid(p.variantGid).id)
      },
      {
        product_gid: p.productGid,
        name: p.name,
        variant: p.variantName || "",
        brand: p.brand,
        price: p.price,
        quantity: Number(p.quantity || 0)
      }
    );
    return JSON.stringify(product);
  }) : [];
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/analytics.mjs
function sendShopifyAnalytics(event, shopDomain) {
  const { eventName, payload } = event;
  if (!payload.hasUserConsent)
    return Promise.resolve();
  let events = [];
  if (eventName === AnalyticsEventName.PAGE_VIEW) {
    const pageViewPayload = payload;
    events = events.concat(
      pageView(pageViewPayload),
      pageView2(pageViewPayload)
    );
  } else if (eventName === AnalyticsEventName.ADD_TO_CART) {
    events = events.concat(
      addToCart(payload)
    );
  }
  if (events.length) {
    return sendToShopify(events, shopDomain);
  } else {
    return Promise.resolve();
  }
}
var ERROR_MESSAGE = "sendShopifyAnalytics request is unsuccessful";
function sendToShopify(events, shopDomain) {
  const eventsToBeSent = {
    events,
    metadata: {
      event_sent_at_ms: Date.now()
    }
  };
  try {
    return fetch(
      shopDomain ? `https://${shopDomain}/.well-known/shopify/monorail/unstable/produce_batch` : "https://monorail-edge.shopifysvc.com/unstable/produce_batch",
      {
        method: "post",
        headers: {
          "content-type": "text/plain"
        },
        body: JSON.stringify(eventsToBeSent)
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Response failed");
      }
      return response.text();
    }).then((data) => {
      if (data) {
        const jsonResponse = JSON.parse(data);
        jsonResponse.result.forEach((eventResponse) => {
          if (eventResponse.status !== 200) {
            console.error(ERROR_MESSAGE, "\n\n", eventResponse.message);
          }
        });
      }
    }).catch((err) => {
      console.error(ERROR_MESSAGE, err);
      if (false)
        ;
    });
  } catch (error) {
    return Promise.resolve();
  }
}
function getClientBrowserParameters() {
  if (errorIfServer("getClientBrowserParameters")) {
    return {
      uniqueToken: "",
      visitToken: "",
      url: "",
      path: "",
      search: "",
      referrer: "",
      title: "",
      userAgent: "",
      navigationType: "",
      navigationApi: ""
    };
  }
  const [navigationType, navigationApi] = getNavigationType();
  const cookies = getShopifyCookies(document.cookie);
  return {
    uniqueToken: cookies[SHOPIFY_Y],
    visitToken: cookies[SHOPIFY_S],
    url: location.href,
    path: location.pathname,
    search: location.search,
    referrer: document.referrer,
    title: document.title,
    userAgent: navigator.userAgent,
    navigationType,
    navigationApi
  };
}
function getNavigationTypeExperimental() {
  try {
    const navigationEntries = (performance == null ? void 0 : performance.getEntriesByType) && (performance == null ? void 0 : performance.getEntriesByType("navigation"));
    if (navigationEntries && navigationEntries[0]) {
      const rawType = window.performance.getEntriesByType(
        "navigation"
      )[0]["type"];
      const navType = rawType && rawType.toString();
      return navType;
    }
  } catch (err) {
  }
  return void 0;
}
function getNavigationTypeLegacy() {
  var _a, _b;
  try {
    if (PerformanceNavigation && ((_a = performance == null ? void 0 : performance.navigation) == null ? void 0 : _a.type) !== null && ((_b = performance == null ? void 0 : performance.navigation) == null ? void 0 : _b.type) !== void 0) {
      const rawType = performance.navigation.type;
      switch (rawType) {
        case PerformanceNavigation.TYPE_NAVIGATE:
          return "navigate";
          break;
        case PerformanceNavigation.TYPE_RELOAD:
          return "reload";
          break;
        case PerformanceNavigation.TYPE_BACK_FORWARD:
          return "back_forward";
          break;
        default:
          return `unknown: ${rawType}`;
      }
    }
  } catch (err) {
  }
  return void 0;
}
function getNavigationType() {
  try {
    let navApi = "PerformanceNavigationTiming";
    let navType = getNavigationTypeExperimental();
    if (!navType) {
      navType = getNavigationTypeLegacy();
      navApi = "performance.navigation";
    }
    if (navType) {
      return [navType, navApi];
    } else {
      return ["unknown", "unknown"];
    }
  } catch (err) {
  }
  return ["error", "error"];
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ExternalVideo.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function ExternalVideo(props) {
  const {
    data,
    options,
    id = data.id,
    frameBorder = "0",
    allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen = true,
    loading = "lazy",
    ...passthroughProps
  } = props;
  if (!data.embedUrl) {
    throw new Error(`<ExternalVideo/> requires the 'embedUrl' property`);
  }
  let finalUrl = data.embedUrl;
  if (options) {
    const urlObject = new URL(data.embedUrl);
    for (const key of Object.keys(options)) {
      urlObject.searchParams.set(key, options[key]);
    }
    finalUrl = urlObject.toString();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "iframe",
    {
      ...passthroughProps,
      id: id ?? data.embedUrl,
      title: data.alt ?? data.id ?? "external video",
      frameBorder,
      allow,
      allowFullScreen,
      src: finalUrl,
      loading
    }
  );
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/MediaFile.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);

// node_modules/@shopify/hydrogen-react/dist/browser-prod/Video.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
function Video(props) {
  var _a;
  const {
    data,
    previewImageOptions,
    id = data.id,
    playsInline = true,
    controls = true,
    sourceProps = {},
    ...passthroughProps
  } = props;
  const posterUrl = shopifyImageLoader({
    src: ((_a = data.previewImage) == null ? void 0 : _a.url) ?? "",
    ...previewImageOptions
  });
  if (!data.sources) {
    throw new Error(`<Video/> requires a 'data.sources' array`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "video",
    {
      ...passthroughProps,
      id,
      playsInline,
      controls,
      poster: posterUrl,
      children: data.sources.map((source) => {
        if (!((source == null ? void 0 : source.url) && (source == null ? void 0 : source.mimeType))) {
          throw new Error(`<Video/> needs 'source.url' and 'source.mimeType'`);
        }
        return /* @__PURE__ */ (0, import_react4.createElement)(
          "source",
          {
            ...sourceProps,
            key: source.url,
            src: source.url,
            type: source.mimeType
          }
        );
      })
    }
  );
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/ModelViewer.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function ModelViewer(props) {
  var _a, _b, _c;
  const [modelViewer, setModelViewer] = (0, import_react5.useState)(
    void 0
  );
  const callbackRef = (0, import_react5.useCallback)((node) => {
    setModelViewer(node);
  }, []);
  const { data, children, className, ...passthroughProps } = props;
  const modelViewerLoadedStatus = useLoadScript(
    "https://unpkg.com/@google/model-viewer@v1.12.1/dist/model-viewer.min.js",
    {
      module: true
    }
  );
  (0, import_react5.useEffect)(() => {
    if (!modelViewer) {
      return;
    }
    if (passthroughProps.onError)
      modelViewer.addEventListener("error", passthroughProps.onError);
    if (passthroughProps.onLoad)
      modelViewer.addEventListener("load", passthroughProps.onLoad);
    if (passthroughProps.onPreload)
      modelViewer.addEventListener("preload", passthroughProps.onPreload);
    if (passthroughProps.onModelVisibility)
      modelViewer.addEventListener(
        "model-visibility",
        passthroughProps.onModelVisibility
      );
    if (passthroughProps.onProgress)
      modelViewer.addEventListener("progress", passthroughProps.onProgress);
    if (passthroughProps.onArStatus)
      modelViewer.addEventListener("ar-status", passthroughProps.onArStatus);
    if (passthroughProps.onArTracking)
      modelViewer.addEventListener(
        "ar-tracking",
        passthroughProps.onArTracking
      );
    if (passthroughProps.onQuickLookButtonTapped)
      modelViewer.addEventListener(
        "quick-look-button-tapped",
        passthroughProps.onQuickLookButtonTapped
      );
    if (passthroughProps.onCameraChange)
      modelViewer.addEventListener(
        "camera-change",
        passthroughProps.onCameraChange
      );
    if (passthroughProps.onEnvironmentChange)
      modelViewer.addEventListener(
        "environment-change",
        passthroughProps.onEnvironmentChange
      );
    if (passthroughProps.onPlay)
      modelViewer.addEventListener("play", passthroughProps.onPlay);
    if (passthroughProps.onPause)
      modelViewer.addEventListener("ar-status", passthroughProps.onPause);
    if (passthroughProps.onSceneGraphReady)
      modelViewer.addEventListener(
        "scene-graph-ready",
        passthroughProps.onSceneGraphReady
      );
    return () => {
      if (modelViewer == null) {
        return;
      }
      if (passthroughProps.onError)
        modelViewer.removeEventListener("error", passthroughProps.onError);
      if (passthroughProps.onLoad)
        modelViewer.removeEventListener("load", passthroughProps.onLoad);
      if (passthroughProps.onPreload)
        modelViewer.removeEventListener("preload", passthroughProps.onPreload);
      if (passthroughProps.onModelVisibility)
        modelViewer.removeEventListener(
          "model-visibility",
          passthroughProps.onModelVisibility
        );
      if (passthroughProps.onProgress)
        modelViewer.removeEventListener(
          "progress",
          passthroughProps.onProgress
        );
      if (passthroughProps.onArStatus)
        modelViewer.removeEventListener(
          "ar-status",
          passthroughProps.onArStatus
        );
      if (passthroughProps.onArTracking)
        modelViewer.removeEventListener(
          "ar-tracking",
          passthroughProps.onArTracking
        );
      if (passthroughProps.onQuickLookButtonTapped)
        modelViewer.removeEventListener(
          "quick-look-button-tapped",
          passthroughProps.onQuickLookButtonTapped
        );
      if (passthroughProps.onCameraChange)
        modelViewer.removeEventListener(
          "camera-change",
          passthroughProps.onCameraChange
        );
      if (passthroughProps.onEnvironmentChange)
        modelViewer.removeEventListener(
          "environment-change",
          passthroughProps.onEnvironmentChange
        );
      if (passthroughProps.onPlay)
        modelViewer.removeEventListener("play", passthroughProps.onPlay);
      if (passthroughProps.onPause)
        modelViewer.removeEventListener("ar-status", passthroughProps.onPause);
      if (passthroughProps.onSceneGraphReady)
        modelViewer.removeEventListener(
          "scene-graph-ready",
          passthroughProps.onSceneGraphReady
        );
    };
  }, [
    modelViewer,
    passthroughProps.onArStatus,
    passthroughProps.onArTracking,
    passthroughProps.onCameraChange,
    passthroughProps.onEnvironmentChange,
    passthroughProps.onError,
    passthroughProps.onLoad,
    passthroughProps.onModelVisibility,
    passthroughProps.onPause,
    passthroughProps.onPlay,
    passthroughProps.onPreload,
    passthroughProps.onProgress,
    passthroughProps.onQuickLookButtonTapped,
    passthroughProps.onSceneGraphReady
  ]);
  if (modelViewerLoadedStatus !== "done") {
    return null;
  }
  if (!((_b = (_a = data.sources) == null ? void 0 : _a[0]) == null ? void 0 : _b.url)) {
    const sourcesUrlError = `<ModelViewer/> requires 'data.sources' prop to be an array, with an object that has a property 'url' on it. Rendering 'null'`;
    {
      console.error(sourcesUrlError);
      return null;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "model-viewer",
    {
      ref: callbackRef,
      ...passthroughProps,
      className,
      id: passthroughProps.id ?? data.id,
      src: data.sources[0].url,
      alt: data.alt ?? null,
      "camera-controls": passthroughProps.cameraControls ?? true,
      poster: (passthroughProps.poster || ((_c = data.previewImage) == null ? void 0 : _c.url)) ?? null,
      autoplay: passthroughProps.autoplay ?? true,
      loading: passthroughProps.loading,
      reveal: passthroughProps.reveal,
      ar: passthroughProps.ar,
      "ar-modes": passthroughProps.arModes,
      "ar-scale": passthroughProps.arScale,
      "ar-placement": passthroughProps.arPlacement,
      "ios-src": passthroughProps.iosSrc,
      "touch-action": passthroughProps.touchAction,
      "disable-zoom": passthroughProps.disableZoom,
      "orbit-sensitivity": passthroughProps.orbitSensitivity,
      "auto-rotate": passthroughProps.autoRotate,
      "auto-rotate-delay": passthroughProps.autoRotateDelay,
      "rotation-per-second": passthroughProps.rotationPerSecond,
      "interaction-policy": passthroughProps.interactionPolicy,
      "interaction-prompt": passthroughProps.interactionPrompt,
      "interaction-prompt-style": passthroughProps.interactionPromptStyle,
      "interaction-prompt-threshold": passthroughProps.interactionPromptThreshold,
      "camera-orbit": passthroughProps.cameraOrbit,
      "camera-target": passthroughProps.cameraTarget,
      "field-of-view": passthroughProps.fieldOfView,
      "max-camera-orbit": passthroughProps.maxCameraOrbit,
      "min-camera-orbit": passthroughProps.minCameraOrbit,
      "max-field-of-view": passthroughProps.maxFieldOfView,
      "min-field-of-view": passthroughProps.minFieldOfView,
      bounds: passthroughProps.bounds,
      "interpolation-decay": passthroughProps.interpolationDecay ?? 100,
      "skybox-image": passthroughProps.skyboxImage,
      "environment-image": passthroughProps.environmentImage,
      exposure: passthroughProps.exposure,
      "shadow-intensity": passthroughProps.shadowIntensity ?? 0,
      "shadow-softness": passthroughProps.shadowSoftness ?? 0,
      "animation-name": passthroughProps.animationName,
      "animation-crossfade-duration": passthroughProps.animationCrossfadeDuration,
      "variant-name": passthroughProps.variantName,
      orientation: passthroughProps.orientation,
      scale: passthroughProps.scale,
      children
    }
  );
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/MediaFile.mjs
function MediaFile({
  data,
  mediaOptions,
  ...passthroughProps
}) {
  switch (data.__typename) {
    case "MediaImage": {
      if (!data.image) {
        const noDataImage = `<MediaFile/>: 'data.image' does not exist for __typename of 'MediaImage'; rendering 'null' by default.`;
        {
          console.warn(noDataImage);
          return null;
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Image,
        {
          ...passthroughProps,
          ...mediaOptions == null ? void 0 : mediaOptions.image,
          data: data.image
        }
      );
    }
    case "Video": {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Video, { ...passthroughProps, ...mediaOptions == null ? void 0 : mediaOptions.video, data });
    }
    case "ExternalVideo": {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        ExternalVideo,
        {
          ...passthroughProps,
          ...mediaOptions == null ? void 0 : mediaOptions.externalVideo,
          data
        }
      );
    }
    case "Model3d": {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        ModelViewer,
        {
          ...passthroughProps,
          ...mediaOptions == null ? void 0 : mediaOptions.modelViewer,
          data
        }
      );
    }
    default: {
      const typenameMissingMessage = `<MediaFile /> requires the '__typename' property to exist on the 'data' prop in order to render the matching sub-component for this type of media.`;
      {
        console.error(`${typenameMissingMessage}  Rendering 'null' by default`);
        return null;
      }
    }
  }
}

// node_modules/@shopify/hydrogen-react/dist/browser-prod/useShopifyCookies.mjs
var import_react6 = __toESM(require_react(), 1);
var longTermLength = 60 * 60 * 24 * 360 * 1;
var shortTermLength = 60 * 30;
function useShopifyCookies(options) {
  const { hasUserConsent = false, domain = "" } = options || {};
  (0, import_react6.useEffect)(() => {
    const cookies = getShopifyCookies(document.cookie);
    if (hasUserConsent) {
      setCookie(
        SHOPIFY_Y,
        cookies[SHOPIFY_Y] || buildUUID(),
        longTermLength,
        domain
      );
      setCookie(
        SHOPIFY_S,
        cookies[SHOPIFY_S] || buildUUID(),
        shortTermLength,
        domain
      );
    } else {
      setCookie(SHOPIFY_Y, "", 0, domain);
      setCookie(SHOPIFY_S, "", 0, domain);
    }
  });
}
function setCookie(name, value, maxage, domain) {
  document.cookie = l(name, value, {
    maxage,
    domain,
    samesite: "Lax",
    path: "/"
  });
}

// node_modules/@shopify/hydrogen/dist/production/index.js
var Le = m((p) => {
  var E = Symbol.for("react.element"), ct = Symbol.for("react.portal"), ut = Symbol.for("react.fragment"), pt = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), ht = Symbol.for("react.context"), gt = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), yt = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), be = Symbol.iterator;
  function St(e) {
    return e === null || typeof e != "object" ? null : (e = be && e[be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ae = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Pe = Object.assign, Ie = {};
  function x(e, t, r) {
    this.props = e, this.context = t, this.refs = Ie, this.updater = r || Ae;
  }
  x.prototype.isReactComponent = {};
  x.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  x.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Oe() {
  }
  Oe.prototype = x.prototype;
  function Y(e, t, r) {
    this.props = e, this.context = t, this.refs = Ie, this.updater = r || Ae;
  }
  var Z = Y.prototype = new Oe();
  Z.constructor = Y;
  Pe(Z, x.prototype);
  Z.isPureReactComponent = true;
  var Ee = Array.isArray, _e = Object.prototype.hasOwnProperty, ee = { current: null }, ve = { key: true, ref: true, __self: true, __source: true };
  function Me(e, t, r) {
    var n, o = {}, s = null, a = null;
    if (t != null)
      for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t)
        _e.call(t, n) && !ve.hasOwnProperty(n) && (o[n] = t[n]);
    var i = arguments.length - 2;
    if (i === 1)
      o.children = r;
    else if (1 < i) {
      for (var c = Array(i), u3 = 0; u3 < i; u3++)
        c[u3] = arguments[u3 + 2];
      o.children = c;
    }
    if (e && e.defaultProps)
      for (n in i = e.defaultProps, i)
        o[n] === void 0 && (o[n] = i[n]);
    return { $$typeof: E, type: e, key: s, ref: a, props: o, _owner: ee.current };
  }
  function Ct(e, t) {
    return { $$typeof: E, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function te(e) {
    return typeof e == "object" && e !== null && e.$$typeof === E;
  }
  function Tt(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(r) {
      return t[r];
    });
  }
  var ke = /\/+/g;
  function X(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Tt("" + e.key) : t.toString(36);
  }
  function O(e, t, r, n, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = false;
    if (e === null)
      a = true;
    else
      switch (s) {
        case "string":
        case "number":
          a = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case E:
            case ct:
              a = true;
          }
      }
    if (a)
      return a = e, o = o(a), e = n === "" ? "." + X(a, 0) : n, Ee(o) ? (r = "", e != null && (r = e.replace(ke, "$&/") + "/"), O(o, t, r, "", function(u3) {
        return u3;
      })) : o != null && (te(o) && (o = Ct(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(ke, "$&/") + "/") + e)), t.push(o)), 1;
    if (a = 0, n = n === "" ? "." : n + ":", Ee(e))
      for (var i = 0; i < e.length; i++) {
        s = e[i];
        var c = n + X(s, i);
        a += O(s, t, r, c, o);
      }
    else if (c = St(e), typeof c == "function")
      for (e = c.call(e), i = 0; !(s = e.next()).done; )
        s = s.value, c = n + X(s, i++), a += O(s, t, r, c, o);
    else if (s === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a;
  }
  function I(e, t, r) {
    if (e == null)
      return e;
    var n = [], o = 0;
    return O(e, n, "", "", function(s) {
      return t.call(r, s, o++);
    }), n;
  }
  function Rt(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(r) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
      }, function(r) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var m2 = { current: null }, _ = { transition: null }, wt = { ReactCurrentDispatcher: m2, ReactCurrentBatchConfig: _, ReactCurrentOwner: ee };
  p.Children = { map: I, forEach: function(e, t, r) {
    I(e, function() {
      t.apply(this, arguments);
    }, r);
  }, count: function(e) {
    var t = 0;
    return I(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return I(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!te(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  p.Component = x;
  p.Fragment = ut;
  p.Profiler = ft;
  p.PureComponent = Y;
  p.StrictMode = pt;
  p.Suspense = dt;
  p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt;
  p.cloneElement = function(e, t, r) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Pe({}, e.props), o = e.key, s = e.ref, a = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (s = t.ref, a = ee.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var i = e.type.defaultProps;
      for (c in t)
        _e.call(t, c) && !ve.hasOwnProperty(c) && (n[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (c === 1)
      n.children = r;
    else if (1 < c) {
      i = Array(c);
      for (var u3 = 0; u3 < c; u3++)
        i[u3] = arguments[u3 + 2];
      n.children = i;
    }
    return { $$typeof: E, type: e.type, key: o, ref: s, props: n, _owner: a };
  };
  p.createContext = function(e) {
    return e = { $$typeof: ht, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lt, _context: e }, e.Consumer = e;
  };
  p.createElement = Me;
  p.createFactory = function(e) {
    var t = Me.bind(null, e);
    return t.type = e, t;
  };
  p.createRef = function() {
    return { current: null };
  };
  p.forwardRef = function(e) {
    return { $$typeof: gt, render: e };
  };
  p.isValidElement = te;
  p.lazy = function(e) {
    return { $$typeof: mt, _payload: { _status: -1, _result: e }, _init: Rt };
  };
  p.memo = function(e, t) {
    return { $$typeof: yt, type: e, compare: t === void 0 ? null : t };
  };
  p.startTransition = function(e) {
    var t = _.transition;
    _.transition = {};
    try {
      e();
    } finally {
      _.transition = t;
    }
  };
  p.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  p.useCallback = function(e, t) {
    return m2.current.useCallback(e, t);
  };
  p.useContext = function(e) {
    return m2.current.useContext(e);
  };
  p.useDebugValue = function() {
  };
  p.useDeferredValue = function(e) {
    return m2.current.useDeferredValue(e);
  };
  p.useEffect = function(e, t) {
    return m2.current.useEffect(e, t);
  };
  p.useId = function() {
    return m2.current.useId();
  };
  p.useImperativeHandle = function(e, t, r) {
    return m2.current.useImperativeHandle(e, t, r);
  };
  p.useInsertionEffect = function(e, t) {
    return m2.current.useInsertionEffect(e, t);
  };
  p.useLayoutEffect = function(e, t) {
    return m2.current.useLayoutEffect(e, t);
  };
  p.useMemo = function(e, t) {
    return m2.current.useMemo(e, t);
  };
  p.useReducer = function(e, t, r) {
    return m2.current.useReducer(e, t, r);
  };
  p.useRef = function(e) {
    return m2.current.useRef(e);
  };
  p.useState = function(e) {
    return m2.current.useState(e);
  };
  p.useSyncExternalStore = function(e, t, r) {
    return m2.current.useSyncExternalStore(e, t, r);
  };
  p.useTransition = function() {
    return m2.current.useTransition();
  };
  p.version = "18.2.0";
});
var qe = m((pr, je) => {
  je.exports = Le();
});
var R = u(qe(), 1);
var v = "Error in SEO input: ";
var M = { title: { validate: (e) => {
  if (typeof e == "string" && e.length > 120)
    throw new Error(v.concat("`title` should not be longer than 120 characters"));
  return e;
} }, description: { validate: (e) => {
  if (typeof e == "string" && e.length > 155)
    throw new Error(v.concat("`description` should not be longer than 155 characters"));
  return e;
} }, url: { validate: (e) => {
  if (typeof e == "string" && !e.startsWith("http"))
    throw new Error(v.concat("`url` should be a valid URL"));
  return e;
} }, handle: { validate: (e) => {
  if (typeof e == "string" && !e.startsWith("@"))
    throw new Error(v.concat("`handle` should start with `@`"));
  return e;
} } };
function He(e) {
  let t = [], r = { "@context": "https://schema.org", "@type": "Thing" };
  for (let o of Object.keys(e)) {
    let s = re(e[o]), a;
    if (!s)
      return [];
    let c = s.map((u3) => {
      let h2 = [];
      if (!u3)
        return h2;
      switch (o) {
        case "title": {
          a = L(M.title, u3);
          let S = xt(e?.titleTemplate, a);
          h2.push(g2("title", { title: S }), g2("meta", { property: "og:title", content: S }), g2("meta", { name: "twitter:title", content: S })), r.name = a;
          break;
        }
        case "description":
          a = L(M.description, u3), h2.push(g2("meta", { name: "description", content: a }), g2("meta", { property: "og:description", content: a }), g2("meta", { name: "twitter:description", content: a })), r.description = a;
          break;
        case "url":
          a = L(M.url, u3), h2.push(g2("meta", { property: "og:url", content: a }), g2("link", { rel: "canonical", href: a })), r.url = a, r["@type"] = Et(a);
          break;
        case "handle":
          a = L(M.handle, u3), h2.push(g2("meta", { name: "twitter:site", content: a }), g2("meta", { name: "twitter:creator", content: a }));
          break;
        case "jsonLd":
          r = { ...r, ...u3 };
          break;
        case "media": {
          let S = re(u3);
          for (let f of S)
            if (typeof f == "string" && (h2.push(g2("meta", { name: "og:image", content: f })), r.image = f), f && typeof f == "object") {
              let d = f.type || "image", l2 = f ? { url: f?.url, secure_url: f?.url, type: bt(f.url), width: f?.width, height: f?.height, alt: f?.altText } : {};
              for (let y of Object.keys(l2))
                l2[y] && (a = l2[y], h2.push(g2("meta", { property: `og:${d}:${y}`, content: a }, l2.url)));
            }
          break;
        }
        case "alternates": {
          let S = re(u3);
          for (let f of S) {
            if (!f)
              continue;
            let { language: d, url: l2, default: y } = f, w = d ? `${d}${y ? "-default" : ""}` : void 0;
            h2.push(g2("link", { rel: "alternate", hrefLang: w, href: l2 }));
          }
          break;
        }
      }
      return h2;
    }).flat();
    t.push(c.filter((u3) => !!u3));
  }
  let n = [g2("meta", { property: "og:type", content: "website" }), g2("meta", { name: "twitter:card", content: "summary_large_image" })];
  return [...t, ...n].flat().sort((o, s) => o.key.localeCompare(s.key)).concat(g2("script", { type: "application/ld+json", children: r })).flat();
}
function g2(e, t, r) {
  let n = { tag: e, props: {}, key: "" };
  return e === "title" ? (n.children = t.title, n.key = Ue(n), n) : (e === "script" && (n.children = JSON.stringify(t.children), delete t.children), n.props = t, Object.keys(n.props).forEach((o) => !n.props[o] && delete n.props[o]), n.key = Ue(n, r), n);
}
function Ue(e, t) {
  let { tag: r, props: n } = e;
  if (r === "title")
    return "0-title";
  if (r === "meta") {
    let o = n.content === t && typeof n.property == "string" && !n.property.endsWith("secure_url") && "0";
    return [r, ...[t, o], n.property || n.name].filter((a) => a).join("-");
  }
  return r === "link" ? [r, n.rel, n.hrefLang || n.media].filter((s) => s).join("-").replace(/\s+/g, "-") : `${r}-${n.type}`;
}
function xt(e, t) {
  return e ? typeof e == "function" ? e(t) : e.replace("%s", t ?? "") : t;
}
function bt(e) {
  let t = e && e.split(".").pop();
  return t === "svg" ? "image/svg+xml" : t === "png" ? "image/png" : t === "jpg" || t === "jpeg" ? "image/jpeg" : t === "gif" ? "image/gif" : t === "swf" ? "application/x-shockwave-flash" : t === "mp3" ? "audio/mpeg" : "image/jpeg";
}
function Et(e) {
  let t = "Thing";
  if (!e)
    return t;
  let n = [{ type: "WebSite", pattern: "^/$" }, { type: "Product", pattern: "/products/.*" }, { type: "ItemList", pattern: /\/collections$/ }, { type: "ItemList", pattern: /\/collections\/([^/]+)/ }, { type: "WebPage", pattern: /\/pages\/([^/]+)/ }, { type: "WebSite", pattern: /\/blogs\/([^/]+)/ }, { type: "BlogPosting", pattern: /\/blogs\/([^/]+)\/([^/]+)/ }, { type: "Organization", pattern: "/policies" }, { type: "Organization", pattern: /\/policies\/([^/]+)/ }].filter((o) => {
    let { pattern: s } = o;
    return new RegExp(s).test(e);
  });
  return n.length > 0 ? n[n.length - 1].type : t;
}
function re(e) {
  return Array.isArray(e) ? e : [e];
}
function L(e, t) {
  try {
    return e.validate(t);
  } catch (r) {
    let n = r.message;
    return console.warn(n), t;
  }
}
var Pt = R.default.lazy(() => import("/build/_shared/log-seo-tags-GYSQ3BE2-35PELO32.js"));
function It({ debug: e }) {
  let t = useMatches(), r = useLocation(), n = t.flatMap((i) => {
    let { handle: c, ...u3 } = i, h2 = { ...u3, ...r };
    return c === void 0 || c.seo === void 0 ? [] : j(c.seo, h2);
  }).reduce((i, c) => (Object.keys(c).forEach((u3) => !c[u3] && delete c[u3]), { ...i, ...c }), {}), o = He(n);
  e && h(o);
  let s = o.map((i) => i.tag === "script" ? R.default.createElement(i.tag, { ...i.props, key: i.key, dangerouslySetInnerHTML: { __html: i.children } }) : R.default.createElement(i.tag, { ...i.props, key: i.key }, i.children)), a = R.default.createElement(R.default.Suspense, { fallback: null }, R.default.createElement(Pt, { headTags: o }));
  return R.default.createElement(R.default.Fragment, null, s, e && a);
}
function j(e, ...t) {
  if (e instanceof Function)
    return j(e(...t), ...t);
  let r = {};
  return Array.isArray(e) ? (r = e.reduce((n, o) => [...n, j(o)], []), r) : e instanceof Object ? (Object.entries(e).forEach(([o, s]) => {
    r[o] = j(s, ...t);
  }), r) : e;
}

export {
  flattenConnection,
  AnalyticsEventName,
  sendShopifyAnalytics,
  getClientBrowserParameters,
  useMoney,
  Money,
  Image,
  MediaFile,
  ShopPayButton,
  useShopifyCookies,
  It
};
//# sourceMappingURL=/build/_shared/chunk-IKF5OSCB.js.map

"use strict";module.exports = validate20;module.exports.default = validate20;const schema22 = {"type":"object","$schema":"http://json-schema.org/draft-07/schema#","title":"Options","definitions":{"radius":{"title":"Radius","type":"integer","minimum":0,"maximum":50},"size":{"title":"Size","type":"integer","minimum":1},"margin":{"title":"Margin","type":"integer","minimum":0,"maximum":25},"backgroundColor":{"oneOf":[{"type":"string","pattern":"^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"},{"type":"string","enum":["transparent"]}]}},"properties":{"base64":{"title":"Base64","description":"@deprecated use dataUri instead","type":"boolean"},"dataUri":{"title":"Data Uri","type":"boolean"},"userAgent":{"title":"User Agent","description":"@deprecated","type":"string"},"radius":{"$ref":"#/definitions/radius"},"r":{"$ref":"#/definitions/radius"},"width":{"$ref":"#/definitions/size"},"w":{"$ref":"#/definitions/size"},"height":{"$ref":"#/definitions/size"},"h":{"$ref":"#/definitions/size"},"margin":{"$ref":"#/definitions/margin"},"m":{"$ref":"#/definitions/margin"},"background":{"description":"@deprecated use backgroundColor instead","$ref":"#/definitions/backgroundColor"},"backgroundColor":{"$ref":"#/definitions/backgroundColor"},"b":{"$ref":"#/definitions/backgroundColor"}},"additionalProperties":false};const schema23 = {"title":"Radius","type":"integer","minimum":0,"maximum":50};const schema25 = {"title":"Size","type":"integer","minimum":1};const schema29 = {"title":"Margin","type":"integer","minimum":0,"maximum":25};const schema31 = {"oneOf":[{"type":"string","pattern":"^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"},{"type":"string","enum":["transparent"]}]};const func8 = Object.prototype.hasOwnProperty;const func0 = require("ajv/dist/runtime/equal").default;const pattern0 = new RegExp("^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$", "u");function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!(func8.call(schema22.properties, key0))){validate20.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.base64 !== undefined){const _errs2 = errors;if(typeof data.base64 !== "boolean"){validate20.errors = [{instancePath:instancePath+"/base64",schemaPath:"#/properties/base64/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.dataUri !== undefined){const _errs4 = errors;if(typeof data.dataUri !== "boolean"){validate20.errors = [{instancePath:instancePath+"/dataUri",schemaPath:"#/properties/dataUri/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.userAgent !== undefined){const _errs6 = errors;if(typeof data.userAgent !== "string"){validate20.errors = [{instancePath:instancePath+"/userAgent",schemaPath:"#/properties/userAgent/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.radius !== undefined){let data3 = data.radius;const _errs8 = errors;const _errs9 = errors;if(!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))){validate20.errors = [{instancePath:instancePath+"/radius",schemaPath:"#/definitions/radius/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs9){if((typeof data3 == "number") && (isFinite(data3))){if(data3 > 50 || isNaN(data3)){validate20.errors = [{instancePath:instancePath+"/radius",schemaPath:"#/definitions/radius/maximum",keyword:"maximum",params:{comparison: "<=", limit: 50},message:"must be <= 50"}];return false;}else {if(data3 < 0 || isNaN(data3)){validate20.errors = [{instancePath:instancePath+"/radius",schemaPath:"#/definitions/radius/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.r !== undefined){let data4 = data.r;const _errs11 = errors;const _errs12 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate20.errors = [{instancePath:instancePath+"/r",schemaPath:"#/definitions/radius/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs12){if((typeof data4 == "number") && (isFinite(data4))){if(data4 > 50 || isNaN(data4)){validate20.errors = [{instancePath:instancePath+"/r",schemaPath:"#/definitions/radius/maximum",keyword:"maximum",params:{comparison: "<=", limit: 50},message:"must be <= 50"}];return false;}else {if(data4 < 0 || isNaN(data4)){validate20.errors = [{instancePath:instancePath+"/r",schemaPath:"#/definitions/radius/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.width !== undefined){let data5 = data.width;const _errs14 = errors;const _errs15 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate20.errors = [{instancePath:instancePath+"/width",schemaPath:"#/definitions/size/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs15){if((typeof data5 == "number") && (isFinite(data5))){if(data5 < 1 || isNaN(data5)){validate20.errors = [{instancePath:instancePath+"/width",schemaPath:"#/definitions/size/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.w !== undefined){let data6 = data.w;const _errs17 = errors;const _errs18 = errors;if(!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))){validate20.errors = [{instancePath:instancePath+"/w",schemaPath:"#/definitions/size/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs18){if((typeof data6 == "number") && (isFinite(data6))){if(data6 < 1 || isNaN(data6)){validate20.errors = [{instancePath:instancePath+"/w",schemaPath:"#/definitions/size/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}}}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.height !== undefined){let data7 = data.height;const _errs20 = errors;const _errs21 = errors;if(!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))){validate20.errors = [{instancePath:instancePath+"/height",schemaPath:"#/definitions/size/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs21){if((typeof data7 == "number") && (isFinite(data7))){if(data7 < 1 || isNaN(data7)){validate20.errors = [{instancePath:instancePath+"/height",schemaPath:"#/definitions/size/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}}}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.h !== undefined){let data8 = data.h;const _errs23 = errors;const _errs24 = errors;if(!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))){validate20.errors = [{instancePath:instancePath+"/h",schemaPath:"#/definitions/size/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs24){if((typeof data8 == "number") && (isFinite(data8))){if(data8 < 1 || isNaN(data8)){validate20.errors = [{instancePath:instancePath+"/h",schemaPath:"#/definitions/size/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.margin !== undefined){let data9 = data.margin;const _errs26 = errors;const _errs27 = errors;if(!(((typeof data9 == "number") && (!(data9 % 1) && !isNaN(data9))) && (isFinite(data9)))){validate20.errors = [{instancePath:instancePath+"/margin",schemaPath:"#/definitions/margin/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs27){if((typeof data9 == "number") && (isFinite(data9))){if(data9 > 25 || isNaN(data9)){validate20.errors = [{instancePath:instancePath+"/margin",schemaPath:"#/definitions/margin/maximum",keyword:"maximum",params:{comparison: "<=", limit: 25},message:"must be <= 25"}];return false;}else {if(data9 < 0 || isNaN(data9)){validate20.errors = [{instancePath:instancePath+"/margin",schemaPath:"#/definitions/margin/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.m !== undefined){let data10 = data.m;const _errs29 = errors;const _errs30 = errors;if(!(((typeof data10 == "number") && (!(data10 % 1) && !isNaN(data10))) && (isFinite(data10)))){validate20.errors = [{instancePath:instancePath+"/m",schemaPath:"#/definitions/margin/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}if(errors === _errs30){if((typeof data10 == "number") && (isFinite(data10))){if(data10 > 25 || isNaN(data10)){validate20.errors = [{instancePath:instancePath+"/m",schemaPath:"#/definitions/margin/maximum",keyword:"maximum",params:{comparison: "<=", limit: 25},message:"must be <= 25"}];return false;}else {if(data10 < 0 || isNaN(data10)){validate20.errors = [{instancePath:instancePath+"/m",schemaPath:"#/definitions/margin/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];return false;}}}}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.background !== undefined){let data11 = data.background;const _errs32 = errors;const _errs34 = errors;let valid10 = false;let passing0 = null;const _errs35 = errors;if(errors === _errs35){if(typeof data11 === "string"){if(!pattern0.test(data11)){const err0 = {instancePath:instancePath+"/background",schemaPath:"#/definitions/backgroundColor/oneOf/0/pattern",keyword:"pattern",params:{pattern: "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"},message:"must match pattern \""+"^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"+"\""};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}}else {const err1 = {instancePath:instancePath+"/background",schemaPath:"#/definitions/backgroundColor/oneOf/0/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}var _valid0 = _errs35 === errors;if(_valid0){valid10 = true;passing0 = 0;}const _errs37 = errors;if(typeof data11 !== "string"){const err2 = {instancePath:instancePath+"/background",schemaPath:"#/definitions/backgroundColor/oneOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}if(!(data11 === "transparent")){const err3 = {instancePath:instancePath+"/background",schemaPath:"#/definitions/backgroundColor/oneOf/1/enum",keyword:"enum",params:{allowedValues: schema31.oneOf[1].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err3];}else {vErrors.push(err3);}errors++;}var _valid0 = _errs37 === errors;if(_valid0 && valid10){valid10 = false;passing0 = [passing0, 1];}else {if(_valid0){valid10 = true;passing0 = 1;}}if(!valid10){const err4 = {instancePath:instancePath+"/background",schemaPath:"#/definitions/backgroundColor/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err4];}else {vErrors.push(err4);}errors++;validate20.errors = vErrors;return false;}else {errors = _errs34;if(vErrors !== null){if(_errs34){vErrors.length = _errs34;}else {vErrors = null;}}}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.backgroundColor !== undefined){let data12 = data.backgroundColor;const _errs39 = errors;const _errs41 = errors;let valid12 = false;let passing1 = null;const _errs42 = errors;if(errors === _errs42){if(typeof data12 === "string"){if(!pattern0.test(data12)){const err5 = {instancePath:instancePath+"/backgroundColor",schemaPath:"#/definitions/backgroundColor/oneOf/0/pattern",keyword:"pattern",params:{pattern: "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"},message:"must match pattern \""+"^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"+"\""};if(vErrors === null){vErrors = [err5];}else {vErrors.push(err5);}errors++;}}else {const err6 = {instancePath:instancePath+"/backgroundColor",schemaPath:"#/definitions/backgroundColor/oneOf/0/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err6];}else {vErrors.push(err6);}errors++;}}var _valid1 = _errs42 === errors;if(_valid1){valid12 = true;passing1 = 0;}const _errs44 = errors;if(typeof data12 !== "string"){const err7 = {instancePath:instancePath+"/backgroundColor",schemaPath:"#/definitions/backgroundColor/oneOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err7];}else {vErrors.push(err7);}errors++;}if(!(data12 === "transparent")){const err8 = {instancePath:instancePath+"/backgroundColor",schemaPath:"#/definitions/backgroundColor/oneOf/1/enum",keyword:"enum",params:{allowedValues: schema31.oneOf[1].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err8];}else {vErrors.push(err8);}errors++;}var _valid1 = _errs44 === errors;if(_valid1 && valid12){valid12 = false;passing1 = [passing1, 1];}else {if(_valid1){valid12 = true;passing1 = 1;}}if(!valid12){const err9 = {instancePath:instancePath+"/backgroundColor",schemaPath:"#/definitions/backgroundColor/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err9];}else {vErrors.push(err9);}errors++;validate20.errors = vErrors;return false;}else {errors = _errs41;if(vErrors !== null){if(_errs41){vErrors.length = _errs41;}else {vErrors = null;}}}var valid0 = _errs39 === errors;}else {var valid0 = true;}if(valid0){if(data.b !== undefined){let data13 = data.b;const _errs46 = errors;const _errs48 = errors;let valid14 = false;let passing2 = null;const _errs49 = errors;if(errors === _errs49){if(typeof data13 === "string"){if(!pattern0.test(data13)){const err10 = {instancePath:instancePath+"/b",schemaPath:"#/definitions/backgroundColor/oneOf/0/pattern",keyword:"pattern",params:{pattern: "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"},message:"must match pattern \""+"^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})+$"+"\""};if(vErrors === null){vErrors = [err10];}else {vErrors.push(err10);}errors++;}}else {const err11 = {instancePath:instancePath+"/b",schemaPath:"#/definitions/backgroundColor/oneOf/0/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err11];}else {vErrors.push(err11);}errors++;}}var _valid2 = _errs49 === errors;if(_valid2){valid14 = true;passing2 = 0;}const _errs51 = errors;if(typeof data13 !== "string"){const err12 = {instancePath:instancePath+"/b",schemaPath:"#/definitions/backgroundColor/oneOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err12];}else {vErrors.push(err12);}errors++;}if(!(data13 === "transparent")){const err13 = {instancePath:instancePath+"/b",schemaPath:"#/definitions/backgroundColor/oneOf/1/enum",keyword:"enum",params:{allowedValues: schema31.oneOf[1].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err13];}else {vErrors.push(err13);}errors++;}var _valid2 = _errs51 === errors;if(_valid2 && valid14){valid14 = false;passing2 = [passing2, 1];}else {if(_valid2){valid14 = true;passing2 = 1;}}if(!valid14){const err14 = {instancePath:instancePath+"/b",schemaPath:"#/definitions/backgroundColor/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err14];}else {vErrors.push(err14);}errors++;validate20.errors = vErrors;return false;}else {errors = _errs48;if(vErrors !== null){if(_errs48){vErrors.length = _errs48;}else {vErrors = null;}}}var valid0 = _errs46 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}
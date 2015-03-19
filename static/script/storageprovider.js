/**
 * @fileOverview Requirejs module for storage provider base class
 *
 * @preserve Copyright (c) 2013 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

define(
	'antie/storageprovider',
	['antie/class'],
	function(Class) {
		'use strict';

		var StorageProvider = Class.extend({
			init: function() {
				this._valueCache = {};
			},
			getItem: function(key) {
				return this._valueCache[key];
			},
			setItem: function(key, value) {
				this._valueCache[key] = value;
			},
			removeItem: function(key) {
				delete this._valueCache[key];
			},
			clear: function() {
				this._valueCache = {};
			}
		});

		StorageProvider.STORAGE_TYPE_SESSION = 0;
		StorageProvider.STORAGE_TYPE_PERSISTENT = 1;

		return StorageProvider;
	}
);


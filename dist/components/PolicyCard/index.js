import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';
import Tooltip from '@atlaskit/tooltip';
import { m as mapTestIdToProps } from '../../utils-bc584a2b.js';
import { TooltipDialog } from '../TooltipDialog/index.js';

var img$4 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 82 82' width='82' height='82'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(-0.00001000000000384027%2c -0.00001000000000384027) rotate(0)'%3e%3cpath d='M80.40778%2c82.00001h-78.81554c-0.87891%2c-0.0011 -1.59114%2c-0.71332 -1.59223%2c-1.59223v-78.81554c0%2c-0.87937 0.71287%2c-1.59223 1.59223%2c-1.59223h78.81554c0.87937%2c0 1.59223%2c0.71287 1.59223%2c1.59223v78.81554c0%2c0.87937 -0.71287%2c1.59223 -1.59223%2c1.59223zM46.97088%2c63.95921v2.67575h5.54217c0.82152%2c0.01065 1.63845%2c-0.12411 2.41303%2c-0.39806c0.70628%2c-0.2586 1.34965%2c-0.66413 1.88759%2c-1.1898c0.55404%2c-0.55031 0.97136%2c-1.22284 1.21846%2c-1.96362c0.28498%2c-0.8775 0.42219%2c-1.79626 0.40602%2c-2.71874v-3.74573c-0.0226%2c-0.97807 0.16641%2c-1.94947 0.5541%2c-2.84771c0.33229%2c-0.74742 0.79868%2c-1.42765 1.37609%2c-2.00701c0.50401%2c-0.50479 1.1011%2c-0.90709 1.75822%2c-1.18462c0.52478%2c-0.23228 1.08916%2c-0.36199 1.66269%2c-0.38214v-2.67575c-0.56831%2c-0.0162 -1.13007%2c-0.12594 -1.66269%2c-0.32482c-0.65225%2c-0.23441 -1.25033%2c-0.59837 -1.75822%2c-1.06998c-0.58207%2c-0.54585 -1.04983%2c-1.20196 -1.37609%2c-1.93018c-0.3958%2c-0.92934 -0.58486%2c-1.9336 -0.5541%2c-2.94324v-3.89818c0.00981%2c-0.86069 -0.13861%2c-1.71585 -0.43786%2c-2.52289c-0.27587%2c-0.73513 -0.69124%2c-1.41001 -1.22323%2c-1.98751c-0.52779%2c-0.56346 -1.16583%2c-1.01235 -1.87446%2c-1.31877c-0.75432%2c-0.32331 -1.5677%2c-0.48599 -2.38835%2c-0.47767h-5.54336v2.67575h4.20429c1.59781%2c0 2.72312%2c0.38572 3.34369%2c1.14681c0.62057%2c0.76109 0.93663%2c1.90551 0.93663%2c3.40181v3.70751c-0.0166%2c0.96098 0.17913%2c1.91377 0.5732%2c2.79039c0.34131%2c0.75366 0.80644%2c1.44483 1.37609%2c2.04483c0.4847%2c0.50761 1.0379%2c0.94505 1.64358%2c1.29966c0.42244%2c0.26438 0.88831%2c0.45197 1.37609%2c0.5541v0.22928c-0.47849%2c0.11399 -0.93197%2c0.31489 -1.33787%2c0.59271c-0.61328%2c0.3896 -1.16689%2c0.86598 -1.64358%2c1.4143c-0.56052%2c0.63906 -1.02941%2c1.35299 -1.3932%2c2.12125c-0.4013%2c0.84784 -0.60401%2c1.77601 -0.59271%2c2.71396v3.6693c0%2c1.54725 -0.33437%2c2.70441 -0.99515%2c3.44042c-0.66078%2c0.73601 -1.77852%2c1.10859 -3.32578%2c1.10859zM29.48657%2c31.04855c-0.82065%2c-0.00834 -1.63404%2c0.15433 -2.38835%2c0.47767c-0.70806%2c0.30661 -1.34554%2c0.75549 -1.87286%2c1.31877c-0.532%2c0.57749 -0.94737%2c1.25237 -1.22323%2c1.98751c-0.29925%2c0.80705 -0.44767%2c1.66221 -0.43786%2c2.52289v3.89898c0.03077%2c1.00964 -0.1583%2c2.01391 -0.5541%2c2.94324c-0.32626%2c0.72823 -0.79402%2c1.38433 -1.37609%2c1.93018c-0.50789%2c0.47162 -1.10597%2c0.83559 -1.75822%2c1.06998c-0.53276%2c0.19888 -1.09465%2c0.30862 -1.66309%2c0.32482v2.67575c0.57367%2c0.02009 1.13819%2c0.14981 1.66309%2c0.38214c0.65713%2c0.27752 1.25422%2c0.67982 1.75822%2c1.18462c0.57741%2c0.57936 1.0438%2c1.25959 1.37609%2c2.00701c0.38768%2c0.89824 0.57669%2c1.86964 0.5541%2c2.84771v3.74573c-0.01617%2c0.92248 0.12104%2c1.84123 0.40602%2c2.71874c0.2471%2c0.74078 0.66441%2c1.41331 1.21846%2c1.96362c0.53783%2c0.52562 1.18106%2c0.93114 1.88719%2c1.1898c0.77458%2c0.27395 1.59151%2c0.40871 2.41303%2c0.39806h5.54018v-2.67575h-4.16648c-1.54725%2c0 -2.66699%2c-0.37298 -3.32538%2c-1.10859c-0.65839%2c-0.73561 -0.99515%2c-1.89317 -0.99515%2c-3.44042v-3.6693c0.0113%2c-0.93795 -0.19141%2c-1.86612 -0.59271%2c-2.71396c-0.3639%2c-0.76821 -0.83278%2c-1.48212 -1.3932%2c-2.12125c-0.47669%2c-0.54833 -1.0303%2c-1.02471 -1.64358%2c-1.4143c-0.40601%2c-0.27789 -0.85964%2c-0.47879 -1.33827%2c-0.59271v-0.22928c0.48792%2c-0.10207 0.95393%2c-0.28966 1.37649%2c-0.5541c0.60557%2c-0.35461 1.15864%2c-0.79205 1.64318%2c-1.29966c0.56972%2c-0.59994 1.03486%2c-1.29112 1.37609%2c-2.04483c0.39422%2c-0.87658 0.59009%2c-1.82938 0.5736%2c-2.79039v-3.70831c0%2c-1.4967 0.31526%2c-2.64112 0.93663%2c-3.40181c0.62137%2c-0.76069 1.74668%2c-1.14681 3.34369%2c-1.14681h4.20509v-2.67575zM3.98058%2c3.98058v12.73787h74.03884v-12.73787z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(138%2c 149%2c 159)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-161128060290575' d='M80.40778%2c82.00001h-78.81554c-0.87891%2c-0.0011 -1.59114%2c-0.71332 -1.59223%2c-1.59223v-78.81554c0%2c-0.87937 0.71287%2c-1.59223 1.59223%2c-1.59223h78.81554c0.87937%2c0 1.59223%2c0.71287 1.59223%2c1.59223v78.81554c0%2c0.87937 -0.71287%2c1.59223 -1.59223%2c1.59223zM46.97088%2c63.95921v2.67575h5.54217c0.82152%2c0.01065 1.63845%2c-0.12411 2.41303%2c-0.39806c0.70628%2c-0.2586 1.34965%2c-0.66413 1.88759%2c-1.1898c0.55404%2c-0.55031 0.97136%2c-1.22284 1.21846%2c-1.96362c0.28498%2c-0.8775 0.42219%2c-1.79626 0.40602%2c-2.71874v-3.74573c-0.0226%2c-0.97807 0.16641%2c-1.94947 0.5541%2c-2.84771c0.33229%2c-0.74742 0.79868%2c-1.42765 1.37609%2c-2.00701c0.50401%2c-0.50479 1.1011%2c-0.90709 1.75822%2c-1.18462c0.52478%2c-0.23228 1.08916%2c-0.36199 1.66269%2c-0.38214v-2.67575c-0.56831%2c-0.0162 -1.13007%2c-0.12594 -1.66269%2c-0.32482c-0.65225%2c-0.23441 -1.25033%2c-0.59837 -1.75822%2c-1.06998c-0.58207%2c-0.54585 -1.04983%2c-1.20196 -1.37609%2c-1.93018c-0.3958%2c-0.92934 -0.58486%2c-1.9336 -0.5541%2c-2.94324v-3.89818c0.00981%2c-0.86069 -0.13861%2c-1.71585 -0.43786%2c-2.52289c-0.27587%2c-0.73513 -0.69124%2c-1.41001 -1.22323%2c-1.98751c-0.52779%2c-0.56346 -1.16583%2c-1.01235 -1.87446%2c-1.31877c-0.75432%2c-0.32331 -1.5677%2c-0.48599 -2.38835%2c-0.47767h-5.54336v2.67575h4.20429c1.59781%2c0 2.72312%2c0.38572 3.34369%2c1.14681c0.62057%2c0.76109 0.93663%2c1.90551 0.93663%2c3.40181v3.70751c-0.0166%2c0.96098 0.17913%2c1.91377 0.5732%2c2.79039c0.34131%2c0.75366 0.80644%2c1.44483 1.37609%2c2.04483c0.4847%2c0.50761 1.0379%2c0.94505 1.64358%2c1.29966c0.42244%2c0.26438 0.88831%2c0.45197 1.37609%2c0.5541v0.22928c-0.47849%2c0.11399 -0.93197%2c0.31489 -1.33787%2c0.59271c-0.61328%2c0.3896 -1.16689%2c0.86598 -1.64358%2c1.4143c-0.56052%2c0.63906 -1.02941%2c1.35299 -1.3932%2c2.12125c-0.4013%2c0.84784 -0.60401%2c1.77601 -0.59271%2c2.71396v3.6693c0%2c1.54725 -0.33437%2c2.70441 -0.99515%2c3.44042c-0.66078%2c0.73601 -1.77852%2c1.10859 -3.32578%2c1.10859zM29.48657%2c31.04855c-0.82065%2c-0.00834 -1.63404%2c0.15433 -2.38835%2c0.47767c-0.70806%2c0.30661 -1.34554%2c0.75549 -1.87286%2c1.31877c-0.532%2c0.57749 -0.94737%2c1.25237 -1.22323%2c1.98751c-0.29925%2c0.80705 -0.44767%2c1.66221 -0.43786%2c2.52289v3.89898c0.03077%2c1.00964 -0.1583%2c2.01391 -0.5541%2c2.94324c-0.32626%2c0.72823 -0.79402%2c1.38433 -1.37609%2c1.93018c-0.50789%2c0.47162 -1.10597%2c0.83559 -1.75822%2c1.06998c-0.53276%2c0.19888 -1.09465%2c0.30862 -1.66309%2c0.32482v2.67575c0.57367%2c0.02009 1.13819%2c0.14981 1.66309%2c0.38214c0.65713%2c0.27752 1.25422%2c0.67982 1.75822%2c1.18462c0.57741%2c0.57936 1.0438%2c1.25959 1.37609%2c2.00701c0.38768%2c0.89824 0.57669%2c1.86964 0.5541%2c2.84771v3.74573c-0.01617%2c0.92248 0.12104%2c1.84123 0.40602%2c2.71874c0.2471%2c0.74078 0.66441%2c1.41331 1.21846%2c1.96362c0.53783%2c0.52562 1.18106%2c0.93114 1.88719%2c1.1898c0.77458%2c0.27395 1.59151%2c0.40871 2.41303%2c0.39806h5.54018v-2.67575h-4.16648c-1.54725%2c0 -2.66699%2c-0.37298 -3.32538%2c-1.10859c-0.65839%2c-0.73561 -0.99515%2c-1.89317 -0.99515%2c-3.44042v-3.6693c0.0113%2c-0.93795 -0.19141%2c-1.86612 -0.59271%2c-2.71396c-0.3639%2c-0.76821 -0.83278%2c-1.48212 -1.3932%2c-2.12125c-0.47669%2c-0.54833 -1.0303%2c-1.02471 -1.64358%2c-1.4143c-0.40601%2c-0.27789 -0.85964%2c-0.47879 -1.33827%2c-0.59271v-0.22928c0.48792%2c-0.10207 0.95393%2c-0.28966 1.37649%2c-0.5541c0.60557%2c-0.35461 1.15864%2c-0.79205 1.64318%2c-1.29966c0.56972%2c-0.59994 1.03486%2c-1.29112 1.37609%2c-2.04483c0.39422%2c-0.87658 0.59009%2c-1.82938 0.5736%2c-2.79039v-3.70831c0%2c-1.4967 0.31526%2c-2.64112 0.93663%2c-3.40181c0.62137%2c-0.76069 1.74668%2c-1.14681 3.34369%2c-1.14681h4.20509v-2.67575zM3.98058%2c3.98058v12.73787h74.03884v-12.73787z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 82 82' width='82' height='82'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0%2c 0) rotate(0)'%3e%3cpath d='M80%2c82h-78c-1.10457%2c0 -2%2c-0.89543 -2%2c-2v-78c0%2c-1.10457 0.89543%2c-2 2%2c-2h78c1.10457%2c0 2%2c0.89543 2%2c2v78c0%2c1.10457 -0.89543%2c2 -2%2c2zM4%2c4v13h74v-13z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(89%2c 89%2c 89)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-161978656522263' d='M80%2c82h-78c-1.10457%2c0 -2%2c-0.89543 -2%2c-2v-78c0%2c-1.10457 0.89543%2c-2 2%2c-2h78c1.10457%2c0 2%2c0.89543 2%2c2v78c0%2c1.10457 -0.89543%2c2 -2%2c2zM4%2c4v13h74v-13z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 82 82' width='82' height='82'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0%2c 0) rotate(0)'%3e%3cpath d='M80%2c82h-78c-1.10457%2c0 -2%2c-0.89543 -2%2c-2v-78c0%2c-1.10457 0.89543%2c-2 2%2c-2h78c1.10457%2c0 2%2c0.89543 2%2c2v78c0%2c1.10457 -0.89543%2c2 -2%2c2zM4%2c4v13h74v-13z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(122%2c 40%2c 40)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-161978656520644' d='M80%2c82h-78c-1.10457%2c0 -2%2c-0.89543 -2%2c-2v-78c0%2c-1.10457 0.89543%2c-2 2%2c-2h78c1.10457%2c0 2%2c0.89543 2%2c2v78c0%2c1.10457 -0.89543%2c2 -2%2c2zM4%2c4v13h74v-13z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 12 12' width='12' height='12'%3e%3cg transform='translate(0%2c 0)'%3e%3cdefs%3e%3cpath id='path-161601693481644' d='M9.343705799151346 20.144271570014144 C9.343705799151346 20.144271570014144 14.144271570014148 15.343705799151346 14.144271570014148 15.343705799151346 C14.144271570014148 15.343705799151346 18.944837340876948 20.144271570014144 18.944837340876948 20.144271570014144 C18.944837340876948 20.144271570014144 20.144271570014144 18.944837340876948 20.144271570014144 18.944837340876948 C20.144271570014144 18.944837340876948 15.343705799151346 14.144271570014148 15.343705799151346 14.144271570014148 C15.343705799151346 14.144271570014148 20.144271570014144 9.343705799151346 20.144271570014144 9.343705799151346 C20.144271570014144 9.343705799151346 18.944837340876948 8.144271570014146 18.944837340876948 8.144271570014146 C18.944837340876948 8.144271570014146 14.144271570014148 12.944837340876944 14.144271570014148 12.944837340876944 C14.144271570014148 12.944837340876944 9.343705799151346 8.144271570014146 9.343705799151346 8.144271570014146 C9.343705799151346 8.144271570014146 8.144271570014146 9.343705799151346 8.144271570014146 9.343705799151346 C8.144271570014146 9.343705799151346 12.944837340876944 14.144271570014148 12.944837340876944 14.144271570014148 C12.944837340876944 14.144271570014148 8.144271570014146 18.944837340876948 8.144271570014146 18.944837340876948 C8.144271570014146 18.944837340876948 9.343705799151346 20.144271570014144 9.343705799151346 20.144271570014144 Z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3cg transform='translate(-8.144271570014146%2c -8.144271570014146)'%3e%3cpath d='M9.343705799151346 20.144271570014144 C9.343705799151346 20.144271570014144 14.144271570014148 15.343705799151346 14.144271570014148 15.343705799151346 C14.144271570014148 15.343705799151346 18.944837340876948 20.144271570014144 18.944837340876948 20.144271570014144 C18.944837340876948 20.144271570014144 20.144271570014144 18.944837340876948 20.144271570014144 18.944837340876948 C20.144271570014144 18.944837340876948 15.343705799151346 14.144271570014148 15.343705799151346 14.144271570014148 C15.343705799151346 14.144271570014148 20.144271570014144 9.343705799151346 20.144271570014144 9.343705799151346 C20.144271570014144 9.343705799151346 18.944837340876948 8.144271570014146 18.944837340876948 8.144271570014146 C18.944837340876948 8.144271570014146 14.144271570014148 12.944837340876944 14.144271570014148 12.944837340876944 C14.144271570014148 12.944837340876944 9.343705799151346 8.144271570014146 9.343705799151346 8.144271570014146 C9.343705799151346 8.144271570014146 8.144271570014146 9.343705799151346 8.144271570014146 9.343705799151346 C8.144271570014146 9.343705799151346 12.944837340876944 14.144271570014148 12.944837340876944 14.144271570014148 C12.944837340876944 14.144271570014148 8.144271570014146 18.944837340876948 8.144271570014146 18.944837340876948 C8.144271570014146 18.944837340876948 9.343705799151346 20.144271570014144 9.343705799151346 20.144271570014144 Z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(160%2c 160%2c 160)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto%3b background: transparent%3b display: block%3b shape-rendering: auto%3b' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3e%3ccircle cx='50' cy='50' fill='none' stroke='%23277f82' stroke-width='10' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'%3e %3canimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50%3b360 50 50' keyTimes='0%3b1'%3e%3c/animateTransform%3e%3c/circle%3e%3c!-- %5bldio%5d generated by https://loading.io/ --%3e%3c/svg%3e";

var Icon = styled.img.withConfig({
  displayName: "PolicyCard__Icon",
  componentId: "v2n4ii-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"], ["\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"])));
var CardContent = styled.div.withConfig({
  displayName: "PolicyCard__CardContent",
  componentId: "v2n4ii-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var CardImg = styled.img.withConfig({
  displayName: "PolicyCard__CardImg",
  componentId: "v2n4ii-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var PolicyCardContainer = styled.div.withConfig({
  displayName: "PolicyCard__PolicyCardContainer",
  componentId: "v2n4ii-3"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 10px;\n  position: relative;\n  min-width: 428px;\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n\n  &:hover {\n    background-color: ", ";\n    background-size: cover;\n    cursor: pointer;\n    ", " {\n      display: block;\n    }\n  }\n  div:first-child {\n    display: flex;\n    align-items: center;\n  }\n  ", " {\n    margin-right: 10px;\n    width: 82px;\n  }\n  ", ";\n  @media (max-width: 500px) {\n    min-width: 100%;\n    height: 91px;\n    ", " {\n      width: 56px;\n    }\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  padding: 10px;\n  position: relative;\n  min-width: 428px;\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n\n  &:hover {\n    background-color: ", ";\n    background-size: cover;\n    cursor: pointer;\n    ", " {\n      display: block;\n    }\n  }\n  div:first-child {\n    display: flex;\n    align-items: center;\n  }\n  ", " {\n    margin-right: 10px;\n    width: 82px;\n  }\n  ", ";\n  @media (max-width: 500px) {\n    min-width: 100%;\n    height: 91px;\n    ", " {\n      width: 56px;\n    }\n    ", " {\n      display: block;\n    }\n  }\n"])), theme.grey20, theme.grey100, theme.grey30, Icon, CardImg, function (_a) {
  var disabled = _a.disabled;
  return disabled ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          background-color: ", ";\n          color: ", ";\n          &:hover {\n            background-color: ", ";\n            cursor: auto;\n          }\n          ", " {\n            pointer-events: none;\n          }\n          ", " {\n            opacity: 0.4;\n          }\n        "], ["\n          background-color: ", ";\n          color: ", ";\n          &:hover {\n            background-color: ", ";\n            cursor: auto;\n          }\n          ", " {\n            pointer-events: none;\n          }\n          ", " {\n            opacity: 0.4;\n          }\n        "])), theme.grey10, theme.grey40, theme.grey10, CardContent, CardImg) : '';
}, CardImg, Icon);
var CardText = styled.div.withConfig({
  displayName: "PolicyCard__CardText",
  componentId: "v2n4ii-4"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 14px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  @media (max-width: 500px) {\n    max-width: 210px;\n  }\n  margin-left: 10px;\n  font-weight: ", ";\n"], ["\n  font-size: 14px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  @media (max-width: 500px) {\n    max-width: 210px;\n  }\n  margin-left: 10px;\n  font-weight: ", ";\n"])), function (_a) {
  var bold = _a.bold;
  return bold ? 'bold' : 500;
});
var TextContainer = styled.div.withConfig({
  displayName: "PolicyCard__TextContainer",
  componentId: "v2n4ii-5"
})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n"], ["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n"])));
var ErrorMessage = styled.div.withConfig({
  displayName: "PolicyCard__ErrorMessage",
  componentId: "v2n4ii-6"
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  left: 34px;\n  top: 41px;\n  pointer-events: auto;\n  border-bottom: 1px dotted;\n  cursor: default;\n  color: ", ";\n  @media (max-width: 500px) {\n    left: 20px;\n    top: 36px;\n  }\n"], ["\n  position: absolute;\n  left: 34px;\n  top: 41px;\n  pointer-events: auto;\n  border-bottom: 1px dotted;\n  cursor: default;\n  color: ", ";\n  @media (max-width: 500px) {\n    left: 20px;\n    top: 36px;\n  }\n"])), theme.grey100);
var WorkingSpinnerContainer = styled.div.withConfig({
  displayName: "PolicyCard__WorkingSpinnerContainer",
  componentId: "v2n4ii-7"
})(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  left: 22px;\n  top: 33px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  font-size: 12px;\n  font-weight: 600;\n  img {\n    width: 35px;\n    margin-bottom: 4px;\n  }\n  @media (max-width: 500px) {\n    left: 23px;\n    top: 35px;\n    img {\n      width: 28px;\n    }\n    div {\n      display: none;\n    }\n  }\n"], ["\n  position: absolute;\n  left: 22px;\n  top: 33px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  font-size: 12px;\n  font-weight: 600;\n  img {\n    width: 35px;\n    margin-bottom: 4px;\n  }\n  @media (max-width: 500px) {\n    left: 23px;\n    top: 35px;\n    img {\n      width: 28px;\n    }\n    div {\n      display: none;\n    }\n  }\n"])), theme.grey100);
var PolicyCard = function PolicyCard(_a) {
  var name = _a.name,
      repoUrl = _a.repoUrl,
      onClick = _a.onClick,
      onClickRemoveIcon = _a.onClickRemoveIcon,
      testId = _a.testId,
      disabled = _a.disabled,
      policyIconVariant = _a.policyIconVariant,
      errors = _a.errors,
      props = __rest(_a, ["name", "repoUrl", "onClick", "onClickRemoveIcon", "testId", "disabled", "policyIconVariant", "errors"]);

  var getAppIconBasedOnIconVariant = useCallback(function () {
    var obj = {
      pending: img$3,
      error: img$2,
      loaded: img$4
    };
    return obj[policyIconVariant] || obj.loaded;
  }, [policyIconVariant]);

  var formatErrorsToDisplay = function formatErrorsToDisplay() {
    return /*#__PURE__*/React.createElement("div", null, errors.map(function (error) {
      return /*#__PURE__*/React.createElement("div", {
        key: error
      }, "- ", error);
    }));
  };

  var onClickContent = function onClickContent() {
    if (!disabled) {
      onClick();
    }
  };

  var shouldDisplayPolicyErrorOverlay = (errors === null || errors === void 0 ? void 0 : errors.length) > 0 && policyIconVariant === 'error';
  return /*#__PURE__*/React.createElement(PolicyCardContainer, __assign({}, mapTestIdToProps(testId), props, {
    disabled: disabled
  }), /*#__PURE__*/React.createElement(CardContent, __assign({
    onClick: onClickContent
  }, mapTestIdToProps(testId + "-content")), /*#__PURE__*/React.createElement(CardImg, {
    src: getAppIconBasedOnIconVariant(),
    alt: "application"
  }), shouldDisplayPolicyErrorOverlay && /*#__PURE__*/React.createElement(Tooltip, {
    component: TooltipDialog,
    position: "top",
    content: formatErrorsToDisplay
  }, /*#__PURE__*/React.createElement(ErrorMessage, null, "Error")), policyIconVariant === 'pending' && /*#__PURE__*/React.createElement(WorkingSpinnerContainer, null, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "working-spinner"
  }), /*#__PURE__*/React.createElement("div", null, " Pending... ")), /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(CardText, {
    bold: true
  }, name), repoUrl && /*#__PURE__*/React.createElement(CardText, null, repoUrl))), onClickRemoveIcon && /*#__PURE__*/React.createElement(Icon, __assign({}, mapTestIdToProps(testId + "-remove-btn"), {
    onClick: onClickRemoveIcon,
    src: img$1,
    alt: "remove"
  })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

export { PolicyCard };

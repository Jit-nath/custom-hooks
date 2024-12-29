"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = (0, useState)(null);
  const [loading, setLoading] = (0, useState)(true);
  const [error, setError] = (0, useState)(null);
  (0, useEffect)(() => {
    const fetchData = () =>
      __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        setError(null);
        try {
          const response = yield fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result = yield response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      });
    fetchData();
  }, [url]);
  return [data, loading, error];
}
const _default = useFetch;
export { _default as default };

///<reference path='../../typings/mocha/mocha.d.ts' />
///<reference path='../../typings/assert/assert.d.ts' />

///<reference path='../../lib/Main.ts' />

module Test {
	"use strict";

	export interface ResultPromise {
		success():ResultSuccess;
		failure():ResultFailure;
	}

	export interface ResultSuccess {
		book:ReVIEW.Book;
		result?:string;
		results?:any;
	}

	export interface ResultFailure {
		book:ReVIEW.Book;
	}

	/**
	 * コンパイルを行う。
	 * すべての処理は同期的に行われる。
	 * @param tmpConfig
	 * @returns {{success: (function(): {book: ReVIEW.Book, results: *}), failure: (function(): {})}}
	 */
	export function compile(tmpConfig?:any /* ReVIEW.IConfig */):ResultPromise {
		var config:ReVIEW.IConfig = tmpConfig || <any>{};
		config.analyzer = config.analyzer || new ReVIEW.Build.DefaultAnalyzer();
		config.validators = config.validators || [new ReVIEW.Build.DefaultValidator()];
		config.builders = config.builders || [new ReVIEW.Build.TextBuilder()];
		config.book = config.book || {
			chapters: [
				"sample.re"
			]
		};
		config.book.chapters = config.book.chapters || [
			"sample.re"
		];

		var results:any = {};
		config.write = config.write || ((path:string, content:any) => results[path] = content);

		config.listener = config.listener || {
			onReports: () => {
			},
			onCompileSuccess: ()=> {
			},
			onCompileFailed: ()=> {
			}
		};
		config.listener.onReports = config.listener.onReports || (()=> {
		});
		config.listener.onCompileSuccess = config.listener.onCompileSuccess || (()=> {
		});
		config.listener.onCompileFailed = config.listener.onCompileFailed || (()=> {
		});
		var success:boolean;
		var originalCompileSuccess = config.listener.onCompileSuccess;
		config.listener.onCompileSuccess = (book) => {
			success = true;
			originalCompileSuccess(book);
		};
		var originalCompileFailed = config.listener.onCompileFailed;
		config.listener.onCompileFailed = ()=> {
			success = false;
			originalCompileFailed();
		};

		var book = ReVIEW.start((review)=> {
			review.initConfig(config);
		});

		return {
			success: () => {
				assert(success);
				return {
					book: book,
					results: results
				};
			},
			failure: () => {
				assert(!success);
				return {
					book: book
				};
			}
		};
	}

	export function compileSingle(input:string, tmpConfig?:any /* ReVIEW.IConfig */):ResultPromise {
		var config:ReVIEW.IConfig = tmpConfig || <any>{};
		config.read = config.read || (()=>input);
		config.listener = config.listener || {
			onCompileSuccess: (book)=> {
			}
		};
		var result:string;
		var originalCompileSuccess = config.listener.onCompileSuccess;
		config.listener.onCompileSuccess = (book) => {
			result = book.parts[0].chapters[0].builderProcesses[0].result;
			originalCompileSuccess(book);
		};

		var ret = compile(config);
		return {
			success: () => {
				var success = ret.success();
				success.result = result;
				return success;
			},
			failure: () => {
				return ret.failure();
			}
		};
	}
}






declare module ReVIEW {
    function isNodeJS(): boolean;
    function isAMD(): boolean;
    function flatten(data: any[]): any[];
    function nodeToString(process: Process, node: Parse.SyntaxTree): string;
    function nodeToString(process: BuilderProcess, node: Parse.SyntaxTree): string;
    function nodeContentToString(process: Process, node: Parse.SyntaxTree): string;
    function nodeContentToString(process: BuilderProcess, node: Parse.SyntaxTree): string;
    function findUp(node: Parse.SyntaxTree, predicate: (node: Parse.SyntaxTree) => boolean): Parse.SyntaxTree;
    function findChapter(node: Parse.SyntaxTree, level?: number): Parse.ChapterSyntaxTree;
    function target2builder(target: string): Build.IBuilder;
    module IO {
        function read(path: string): string;
        function write(path: string, content: string): void;
    }
    function stringRepeat(times: number, src: string): string;
    module Exec {
        interface ResultPromise {
            success(): ResultSuccess;
            failure(): ResultFailure;
        }
        interface ResultSuccess {
            book: Book;
            results?: any;
        }
        interface ResultFailure {
            book: Book;
        }
        function singleCompile(input: string, fileName?: string, target?: string, tmpConfig?: any): {
            success: (callback: (result: ResultSuccess) => void) => void;
            failure: (callback: (result: ResultFailure) => void) => void;
        };
    }
}
declare module ReVIEW {
    var ja: {
        "sample": string;
        "description": {
            "headline": string;
            "column": string;
            "ulist": string;
            "olist": string;
            "dlist": string;
            "block_list": string;
            "inline_list": string;
            "block_listnum": string;
            "block_emlist": string;
            "block_emlistnum": string;
            "block_image": string;
            "block_indepimage": string;
            "inline_img": string;
            "inline_icon": string;
            "block_footnote": string;
            "inline_fn": string;
            "block_lead": string;
            "block_noindent": string;
            "block_source": string;
            "block_cmd": string;
            "block_quote": string;
            "inline_hd": string;
            "inline_code": string;
            "inline_br": string;
            "inline_u": string;
            "inline_ruby": string;
            "inline_b": string;
            "inline_href": string;
            "block_label": string;
            "inline_kw": string;
            "inline_tti": string;
            "inline_ttb": string;
            "inline_ami": string;
            "inline_bou": string;
            "inline_i": string;
            "inline_strong": string;
            "inline_uchar": string;
            "inline_tt": string;
            "inline_em": string;
        };
        "compile": {
            "file_not_exists": string;
            "block_not_supported": string;
            "inline_not_supported": string;
            "part_is_missing": string;
            "chapter_is_missing": string;
            "reference_is_missing": string;
            "duplicated_label": string;
            "args_length_mismatch": string;
            "body_string_only": string;
            "chapter_not_toplevel": string;
            "chapter_topleve_eq1": string;
            "chapter_level_omission": string;
            "deprecated_inline_symbol": string;
        };
        "builder": {
            "chapter": string;
            "list": string;
        };
    };
}
declare module ReVIEW {
    var en: {
        "sample": string;
    };
}
declare module ReVIEW.i18n {
    function setup(lang?: string): void;
    function t(str: string, ...args: any[]): string;
}
declare module ReVIEW {
    module Parse {
    }
    function walk(ast: Parse.SyntaxTree, actor: (ast: Parse.SyntaxTree) => Parse.SyntaxTree): void;
    function visit(ast: Parse.SyntaxTree, v: ITreeVisitor): void;
    interface ITreeVisitor {
        visitDefaultPre(node: Parse.SyntaxTree, parent: Parse.SyntaxTree): any;
        visitDefaultPost? (node: Parse.SyntaxTree, parent: Parse.SyntaxTree): void;
        visitNodePre? (node: Parse.NodeSyntaxTree, parent: Parse.SyntaxTree): any;
        visitNodePost? (node: Parse.NodeSyntaxTree, parent: Parse.SyntaxTree): void;
        visitBlockElementPre? (node: Parse.BlockElementSyntaxTree, parent: Parse.SyntaxTree): any;
        visitBlockElementPost? (node: Parse.BlockElementSyntaxTree, parent: Parse.SyntaxTree): void;
        visitInlineElementPre? (node: Parse.InlineElementSyntaxTree, parent: Parse.SyntaxTree): any;
        visitInlineElementPost? (node: Parse.InlineElementSyntaxTree, parent: Parse.SyntaxTree): void;
        visitArgumentPre? (node: Parse.ArgumentSyntaxTree, parent: Parse.SyntaxTree): any;
        visitArgumentPost? (node: Parse.ArgumentSyntaxTree, parent: Parse.SyntaxTree): void;
        visitChapterPre? (node: Parse.ChapterSyntaxTree, parent: Parse.SyntaxTree): any;
        visitChapterPost? (node: Parse.ChapterSyntaxTree, parent: Parse.SyntaxTree): void;
        visitParagraphPre? (node: Parse.NodeSyntaxTree, parent: Parse.SyntaxTree): any;
        visitParagraphPost? (node: Parse.NodeSyntaxTree, parent: Parse.SyntaxTree): void;
        visitHeadlinePre? (node: Parse.HeadlineSyntaxTree, parent: Parse.SyntaxTree): any;
        visitHeadlinePost? (node: Parse.HeadlineSyntaxTree, parent: Parse.SyntaxTree): void;
        visitUlistPre? (node: Parse.UlistElementSyntaxTree, parent: Parse.SyntaxTree): any;
        visitUlistPost? (node: Parse.UlistElementSyntaxTree, parent: Parse.SyntaxTree): void;
        visitOlistPre? (node: Parse.OlistElementSyntaxTree, parent: Parse.SyntaxTree): any;
        visitOlistPost? (node: Parse.OlistElementSyntaxTree, parent: Parse.SyntaxTree): void;
        visitDlistPre? (node: Parse.DlistElementSyntaxTree, parent: Parse.SyntaxTree): any;
        visitDlistPost? (node: Parse.DlistElementSyntaxTree, parent: Parse.SyntaxTree): void;
        visitColumnPre? (node: Parse.ColumnSyntaxTree, parent: Parse.SyntaxTree): any;
        visitColumnPost? (node: Parse.ColumnSyntaxTree, parent: Parse.SyntaxTree): void;
        visitColumnHeadlinePre? (node: Parse.ColumnHeadlineSyntaxTree, parent: Parse.SyntaxTree): any;
        visitColumnHeadlinePost? (node: Parse.ColumnHeadlineSyntaxTree, parent: Parse.SyntaxTree): void;
        visitTextPre? (node: Parse.TextNodeSyntaxTree, parent: Parse.SyntaxTree): any;
        visitTextPost? (node: Parse.TextNodeSyntaxTree, parent: Parse.SyntaxTree): void;
    }
}
declare module ReVIEW.Parse {
    function parse(input: string): {
        ast: NodeSyntaxTree;
        cst: IConcreatSyntaxTree;
    };
    function transform(rawResult: IConcreatSyntaxTree): SyntaxTree;
    class ParseError implements Error {
        public syntax: IConcreatSyntaxTree;
        public message: string;
        public name: string;
        constructor(syntax: IConcreatSyntaxTree, message: string);
    }
    interface IConcreatSyntaxTree {
        syntax: string;
        line: number;
        column: number;
        offset: number;
        endPos: number;
        headline?: any;
        text?: any;
        level?: number;
        label?: any;
        cmd?: any;
        caption?: any;
        symbol?: any;
        args?: any;
        content?: any;
        contents?: any;
        arg?: any;
        no?: any;
    }
    enum RuleName {
        SyntaxError = 0,
        Start = 1,
        Chapters = 2,
        Chapter = 3,
        Headline = 4,
        Contents = 5,
        Content = 6,
        Paragraph = 7,
        ParagraphSubs = 8,
        ParagraphSub = 9,
        ContentText = 10,
        BlockElement = 11,
        InlineElement = 12,
        BracketArg = 13,
        BraceArg = 14,
        BlockElementContents = 15,
        BlockElementContent = 16,
        BlockElementParagraph = 17,
        BlockElementParagraphSubs = 18,
        BlockElementParagraphSub = 19,
        BlockElementContentText = 20,
        InlineElementContents = 21,
        InlineElementContent = 22,
        InlineElementContentText = 23,
        SinglelineContent = 24,
        ContentInlines = 25,
        ContentInline = 26,
        ContentInlineText = 27,
        Ulist = 28,
        UlistElement = 29,
        Olist = 30,
        OlistElement = 31,
        Dlist = 32,
        DlistElement = 33,
        DlistElementContent = 34,
        Column = 35,
        ColumnHeadline = 36,
        ColumnContents = 37,
        ColumnContent = 38,
        ColumnTerminator = 39,
        SinglelineComment = 40,
    }
    class SyntaxTree {
        public parentNode: SyntaxTree;
        public offset: number;
        public line: number;
        public column: number;
        public endPos: number;
        public ruleName: RuleName;
        public no: number;
        public prev: SyntaxTree;
        public next: SyntaxTree;
        constructor(data: IConcreatSyntaxTree);
        public toJSON(): any;
        public toString(indentLevel?: number): string;
        public makeIndent(indentLevel: number): string;
        public toStringHook(indentLevel: number, result: string): void;
        public checkNumber(value: any): number;
        public checkString(value: any): string;
        public checkObject(value: any): any;
        public checkArray(value: any): any[];
        private checkSyntaxType(clazz);
        public isNode(): boolean;
        public isBlockElement(): boolean;
        public isInlineElement(): boolean;
        public isArgument(): boolean;
        public isChapter(): boolean;
        public isHeadline(): boolean;
        public isUlist(): boolean;
        public isOlist(): boolean;
        public isDlist(): boolean;
        public isTextNode(): boolean;
        private toOtherNode<T extends SyntaxTree>(clazz);
        public toNode(): NodeSyntaxTree;
        public toBlockElement(): BlockElementSyntaxTree;
        public toInlineElement(): InlineElementSyntaxTree;
        public toArgument(): ArgumentSyntaxTree;
        public toChapter(): ChapterSyntaxTree;
        public toColumn(): ColumnSyntaxTree;
        public toHeadline(): HeadlineSyntaxTree;
        public toColumnHeadline(): ColumnHeadlineSyntaxTree;
        public toUlist(): UlistElementSyntaxTree;
        public toOlist(): OlistElementSyntaxTree;
        public toDlist(): DlistElementSyntaxTree;
        public toTextNode(): TextNodeSyntaxTree;
    }
    class NodeSyntaxTree extends SyntaxTree {
        public childNodes: SyntaxTree[];
        constructor(data: IConcreatSyntaxTree);
        private processChildNodes(content);
        public toStringHook(indentLevel: number, result: string): void;
    }
    class ChapterSyntaxTree extends NodeSyntaxTree {
        public headline: HeadlineSyntaxTree;
        public text: SyntaxTree[];
        constructor(data: IConcreatSyntaxTree);
        public level : number;
        public fqn : string;
    }
    class HeadlineSyntaxTree extends SyntaxTree {
        public level: number;
        public label: ArgumentSyntaxTree;
        public caption: NodeSyntaxTree;
        constructor(data: IConcreatSyntaxTree);
    }
    class BlockElementSyntaxTree extends NodeSyntaxTree {
        public symbol: string;
        public args: ArgumentSyntaxTree[];
        constructor(data: IConcreatSyntaxTree);
    }
    class InlineElementSyntaxTree extends NodeSyntaxTree {
        public symbol: string;
        constructor(data: IConcreatSyntaxTree);
    }
    class ColumnSyntaxTree extends NodeSyntaxTree {
        public headline: ColumnHeadlineSyntaxTree;
        public text: SyntaxTree[];
        constructor(data: IConcreatSyntaxTree);
        public level : number;
        public fqn : string;
    }
    class ColumnHeadlineSyntaxTree extends SyntaxTree {
        public level: number;
        public caption: NodeSyntaxTree;
        constructor(data: IConcreatSyntaxTree);
    }
    class ArgumentSyntaxTree extends SyntaxTree {
        public arg: string;
        constructor(data: IConcreatSyntaxTree);
    }
    class UlistElementSyntaxTree extends NodeSyntaxTree {
        public level: number;
        public text: SyntaxTree;
        constructor(data: IConcreatSyntaxTree);
    }
    class OlistElementSyntaxTree extends SyntaxTree {
        public no: number;
        public text: SyntaxTree;
        constructor(data: IConcreatSyntaxTree);
    }
    class DlistElementSyntaxTree extends SyntaxTree {
        public text: SyntaxTree;
        public content: SyntaxTree;
        constructor(data: IConcreatSyntaxTree);
    }
    class TextNodeSyntaxTree extends SyntaxTree {
        public text: string;
        constructor(data: IConcreatSyntaxTree);
    }
}
declare module ReVIEW.Build {
    enum SyntaxType {
        Block = 0,
        Inline = 1,
        Other = 2,
    }
    interface IAnalyzeProcessor {
        (process: Process, node: Parse.SyntaxTree): any;
    }
    class AcceptableSyntaxes {
        public acceptableSyntaxes: AcceptableSyntax[];
        constructor(acceptableSyntaxes: AcceptableSyntax[]);
        public find(node: Parse.SyntaxTree): AcceptableSyntax[];
        public inlines : AcceptableSyntax[];
        public blocks : AcceptableSyntax[];
        public others : AcceptableSyntax[];
        public toJSON(): any;
    }
    class AcceptableSyntax {
        public type: SyntaxType;
        public clazz: any;
        public symbolName: string;
        public argsLength: number[];
        public allowInline: boolean;
        public allowFullySyntax: boolean;
        public description: string;
        public process: IAnalyzeProcessor;
        public toJSON(): any;
    }
    interface IAnalyzer {
        getAcceptableSyntaxes(): AcceptableSyntaxes;
    }
    interface IAcceptableSyntaxBuilder {
        setSyntaxType(type: SyntaxType): void;
        setClass(clazz: any): void;
        setSymbol(symbolName: string): void;
        setDescription(description: string): void;
        checkArgsLength(...argsLength: number[]): void;
        setAllowInline(enable: boolean): void;
        setAllowFullySyntax(enable: boolean): void;
        processNode(func: IAnalyzeProcessor): void;
    }
    class DefaultAnalyzer implements IAnalyzer {
        private _acceptableSyntaxes;
        public getAcceptableSyntaxes(): AcceptableSyntaxes;
        public constructAcceptableSyntaxes(): AcceptableSyntax[];
        public headline(builder: IAcceptableSyntaxBuilder): void;
        public column(builder: IAcceptableSyntaxBuilder): void;
        public ulist(builder: IAcceptableSyntaxBuilder): void;
        public olist(builder: IAcceptableSyntaxBuilder): void;
        public dlist(builder: IAcceptableSyntaxBuilder): void;
        public block_list(builder: IAcceptableSyntaxBuilder): void;
        public block_listnum(builder: IAcceptableSyntaxBuilder): void;
        public inline_list(builder: IAcceptableSyntaxBuilder): void;
        public block_emlist(builder: IAcceptableSyntaxBuilder): void;
        public block_emlistnum(builder: IAcceptableSyntaxBuilder): void;
        public inline_hd(builder: IAcceptableSyntaxBuilder): void;
        public block_image(builder: IAcceptableSyntaxBuilder): void;
        public block_indepimage(builder: IAcceptableSyntaxBuilder): void;
        public inline_img(builder: IAcceptableSyntaxBuilder): void;
        public inline_icon(builder: IAcceptableSyntaxBuilder): void;
        public block_footnote(builder: IAcceptableSyntaxBuilder): void;
        public inline_fn(builder: IAcceptableSyntaxBuilder): void;
        public blockDecorationSyntax(builder: IAcceptableSyntaxBuilder, symbol: string, ...argsLength: number[]): void;
        public block_lead(builder: IAcceptableSyntaxBuilder): void;
        public block_noindent(builder: IAcceptableSyntaxBuilder): void;
        public block_source(builder: IAcceptableSyntaxBuilder): void;
        public block_cmd(builder: IAcceptableSyntaxBuilder): void;
        public block_quote(builder: IAcceptableSyntaxBuilder): void;
        public inlineDecorationSyntax(builder: IAcceptableSyntaxBuilder, symbol: string): void;
        public inline_br(builder: IAcceptableSyntaxBuilder): void;
        public inline_ruby(builder: IAcceptableSyntaxBuilder): void;
        public inline_b(builder: IAcceptableSyntaxBuilder): void;
        public inline_code(builder: IAcceptableSyntaxBuilder): void;
        public inline_tt(builder: IAcceptableSyntaxBuilder): void;
        public inline_href(builder: IAcceptableSyntaxBuilder): void;
        public block_label(builder: IAcceptableSyntaxBuilder): void;
        public inline_u(builder: IAcceptableSyntaxBuilder): void;
        public inline_kw(builder: IAcceptableSyntaxBuilder): void;
        public inline_em(builder: IAcceptableSyntaxBuilder): void;
        public inline_tti(builder: IAcceptableSyntaxBuilder): void;
        public inline_ttb(builder: IAcceptableSyntaxBuilder): void;
        public inline_ami(builder: IAcceptableSyntaxBuilder): void;
        public inline_bou(builder: IAcceptableSyntaxBuilder): void;
        public inline_i(builder: IAcceptableSyntaxBuilder): void;
        public inline_strong(builder: IAcceptableSyntaxBuilder): void;
        public inline_uchar(builder: IAcceptableSyntaxBuilder): void;
    }
}
declare module ReVIEW.Build {
    interface IBuilder {
        name: string;
        extention: string;
        init(book: Book): void;
        chapterPre(process: BuilderProcess, node: Parse.ChapterSyntaxTree): any;
        chapterPost(process: BuilderProcess, node: Parse.ChapterSyntaxTree): any;
        headlinePre(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): any;
        headlinePost(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): any;
        columnPre(process: BuilderProcess, node: Parse.ColumnSyntaxTree): any;
        columnPost(process: BuilderProcess, node: Parse.ColumnSyntaxTree): any;
        columnHeadlinePre(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): any;
        columnHeadlinePost(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): any;
        ulistPre(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): any;
        ulistPost(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): any;
        olistPre(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): any;
        olistPost(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): any;
        blockPre(process: BuilderProcess, name: string, node: Parse.BlockElementSyntaxTree): any;
        blockPost(process: BuilderProcess, name: string, node: Parse.BlockElementSyntaxTree): any;
        inlinePre(process: BuilderProcess, name: string, node: Parse.InlineElementSyntaxTree): any;
        inlinePost(process: BuilderProcess, name: string, node: Parse.InlineElementSyntaxTree): any;
        text(process: BuilderProcess, node: Parse.TextNodeSyntaxTree): any;
    }
    class DefaultBuilder implements IBuilder {
        public book: Book;
        public extention: string;
        public name : string;
        public init(book: Book): void;
        public processPost(process: BuilderProcess, chapter: Chapter): void;
        public chapterPre(process: BuilderProcess, node: Parse.ChapterSyntaxTree): any;
        public chapterPost(process: BuilderProcess, node: Parse.ChapterSyntaxTree): any;
        public headlinePre(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): any;
        public headlinePost(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): any;
        public columnPre(process: BuilderProcess, node: Parse.ColumnSyntaxTree): any;
        public columnPost(process: BuilderProcess, node: Parse.ColumnSyntaxTree): any;
        public columnHeadlinePre(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): any;
        public columnHeadlinePost(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): any;
        public paragraphPre(process: BuilderProcess, name: string, node: Parse.NodeSyntaxTree): any;
        public paragraphPost(process: BuilderProcess, name: string, node: Parse.NodeSyntaxTree): any;
        public ulistPre(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): any;
        public ulistPost(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): any;
        public olistPre(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): any;
        public olistPost(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): any;
        public dlistPre(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): any;
        public dlistPost(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): any;
        public text(process: BuilderProcess, node: Parse.TextNodeSyntaxTree): any;
        public blockPre(process: BuilderProcess, name: string, node: Parse.BlockElementSyntaxTree): any;
        public blockPost(process: BuilderProcess, name: string, node: Parse.BlockElementSyntaxTree): any;
        public inlinePre(process: BuilderProcess, name: string, node: Parse.InlineElementSyntaxTree): any;
        public inlinePost(process: BuilderProcess, name: string, node: Parse.InlineElementSyntaxTree): any;
        public ulistParentHelper(process: BuilderProcess, node: Parse.UlistElementSyntaxTree, action: () => void, currentLevel?: number): void;
        public findReference(process: BuilderProcess, node: Parse.SyntaxTree): ISymbol;
    }
}
declare module ReVIEW {
    interface IReferenceTo {
        part?: Part;
        partName: string;
        chapter?: Chapter;
        chapterName: string;
        targetSymbol: string;
        label: string;
        referenceNode?: Parse.SyntaxTree;
    }
    interface ISymbol {
        part?: Part;
        chapter?: Chapter;
        symbolName: string;
        labelName?: string;
        referenceTo?: IReferenceTo;
        node: Parse.SyntaxTree;
    }
    enum ReportLevel {
        Info = 0,
        Warning = 1,
        Error = 2,
    }
    class ProcessReport {
        public level: ReportLevel;
        public part: Part;
        public chapter: Chapter;
        public message: string;
        public nodes: Parse.SyntaxTree[];
        constructor(level: ReportLevel, part: Part, chapter: Chapter, message: string, nodes?: Parse.SyntaxTree[]);
    }
    class BookProcess {
        public reports: ProcessReport[];
        public info(message: string): void;
        public warn(message: string): void;
        public error(message: string): void;
    }
    class Process {
        public part: Part;
        public chapter: Chapter;
        public input: string;
        public symbols: ISymbol[];
        public indexCounter: {
            [kind: string]: number;
        };
        public afterProcess: Function[];
        private _reports;
        constructor(part: Part, chapter: Chapter, input: string);
        public info(message: string, ...nodes: Parse.SyntaxTree[]): void;
        public warn(message: string, ...nodes: Parse.SyntaxTree[]): void;
        public error(message: string, ...nodes: Parse.SyntaxTree[]): void;
        public nextIndex(kind: string): number;
        public reports : ProcessReport[];
        public addSymbol(symbol: ISymbol): void;
        public missingSymbols : ISymbol[];
        public constructReferenceTo(node: Parse.InlineElementSyntaxTree, value: string, targetSymbol?: string, separator?: string): IReferenceTo;
        public constructReferenceTo(node: Parse.BlockElementSyntaxTree, value: string, targetSymbol: string, separator?: string): IReferenceTo;
        public addAfterProcess(func: Function): void;
        public doAfterProcess(): void;
    }
    class BuilderProcess {
        public builder: Build.IBuilder;
        public base: Process;
        constructor(builder: Build.IBuilder, base: Process);
        public info : (message: string, ...nodes: Parse.SyntaxTree[]) => void;
        public warn : (message: string, ...nodes: Parse.SyntaxTree[]) => void;
        public error : (message: string, ...nodes: Parse.SyntaxTree[]) => void;
        public result: string;
        public out(data: any): BuilderProcess;
        public pushOut(data: string): BuilderProcess;
        public input : string;
        public symbols : ISymbol[];
    }
    class Book {
        public config: IConfig;
        public process: BookProcess;
        public parts: Part[];
        constructor(config: IConfig);
        public reports : ProcessReport[];
    }
    class Part {
        public parent: Book;
        public no: number;
        public name: string;
        public chapters: Chapter[];
        constructor(parent: Book, no: number, name: string);
    }
    class Chapter {
        public parent: Part;
        public no: number;
        public name: string;
        public input: string;
        public root: Parse.SyntaxTree;
        public process: Process;
        public builderProcesses: BuilderProcess[];
        constructor(parent: Part, no: number, name: string, input: string, root: Parse.SyntaxTree);
        public createBuilderProcess(builder: Build.IBuilder): BuilderProcess;
        public findResultByBuilder(builderName: string): string;
        public findResultByBuilder(builder: Build.IBuilder): string;
    }
}
declare module ReVIEW.Build {
    interface IPreprocessor {
        start(book: Book, acceptableSyntaxes: AcceptableSyntaxes): void;
    }
    class SyntaxPreprocessor implements IPreprocessor {
        public acceptableSyntaxes: AcceptableSyntaxes;
        public start(book: Book, acceptableSyntaxes: AcceptableSyntaxes): void;
        public preprocessBook(book: Book): void;
        public preprocessPart(part: Part): void;
        public preprocessChapter(chapter: Chapter): void;
        public preprocessBlockSyntax(chapter: Chapter, node: Parse.BlockElementSyntaxTree): void;
    }
}
declare module ReVIEW.Build {
    interface IValidator {
        start(book: Book, acceptableSyntaxes: AcceptableSyntaxes, builders: IBuilder[]): void;
    }
    class DefaultValidator implements IValidator {
        public acceptableSyntaxes: AcceptableSyntaxes;
        public builders: IBuilder[];
        public start(book: Book, acceptableSyntaxes: AcceptableSyntaxes, builders: IBuilder[]): void;
        public checkBuilder(book: Book, acceptableSyntaxes: AcceptableSyntaxes, builders?: IBuilder[]): void;
        public checkBook(book: Book): void;
        public checkPart(part: Part): void;
        public checkChapter(chapter: Chapter): void;
        public resolveSymbolAndReference(book: Book): void;
    }
}
declare module ReVIEW {
    interface IOptions {
        reviewfile?: string;
        base?: string;
    }
    interface IConfig {
        read?: (path: string) => string;
        write?: (path: string, data: string) => void;
        listener?: IConfigListener;
        analyzer?: Build.IAnalyzer;
        validators?: Build.IValidator[];
        builders: Build.IBuilder[];
        book: IConfigBook;
    }
    interface IConfigListener {
        onAcceptables?: (acceptableSyntaxes: Build.AcceptableSyntaxes) => any;
        onSymbols?: (symbols: ISymbol[]) => any;
        onReports?: (reports: ProcessReport[]) => any;
        onCompileSuccess?: (book: Book) => void;
        onCompileFailed?: () => void;
    }
    interface IConfigBook {
        preface?: string[];
        chapters: string[];
        afterword?: string[];
    }
    class Controller {
        public options: IOptions;
        private config;
        constructor(options?: IOptions);
        public initConfig(data: IConfig): void;
        public process(): Book;
        private processBook();
        private processPart(book, index, name, chapters?);
        private processChapter(book, part, index, chapterPath);
    }
}
declare module ReVIEW.Build {
    class TextBuilder extends DefaultBuilder {
        public extention: string;
        public headlinePre(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): void;
        public headlinePost(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): void;
        public columnHeadlinePre(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): (v: ITreeVisitor) => void;
        public columnHeadlinePost(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): void;
        public columnPost(process: BuilderProcess, node: Parse.ColumnSyntaxTree): void;
        public paragraphPost(process: BuilderProcess, name: string, node: Parse.NodeSyntaxTree): void;
        public ulistPre(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): void;
        public ulistPost(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): void;
        public olistPre(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): void;
        public olistPost(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): void;
        public dlistPre(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): (v: ITreeVisitor) => void;
        public dlistPost(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): void;
        public block_list_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_list_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_listnum_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_listnum_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_list(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_emlist_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_emlist_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_emlistnum_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_emlistnum_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_hd_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public inline_hd_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_br(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_b_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_b_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_code_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_code_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_href_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_href_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_href(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_label(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_ruby(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): (v: ITreeVisitor) => void;
        public inline_u_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_u_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_kw(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): (v: ITreeVisitor) => void;
        public inline_tt_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_tt_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_em_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_em_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public block_image(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public block_indepimage(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_img(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public inline_icon(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_footnote(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_fn(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_lead_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_lead_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_tti_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_tti_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ttb_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ttb_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public block_noindent(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public block_source_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_source_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_cmd_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_cmd_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_quote_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_quote_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_ami_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ami_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_bou_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_bou_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_i_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_i_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_strong_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_strong_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_uchar(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
    }
}
declare module ReVIEW.Build {
    class HtmlBuilder extends DefaultBuilder {
        private standalone;
        public extention: string;
        constructor(standalone?: boolean);
        public processPost(process: BuilderProcess, chapter: Chapter): void;
        public headlinePre(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): void;
        public headlinePost(process: BuilderProcess, name: string, node: Parse.HeadlineSyntaxTree): void;
        public columnPre(process: BuilderProcess, node: Parse.ColumnSyntaxTree): void;
        public columnPost(process: BuilderProcess, node: Parse.ColumnSyntaxTree): void;
        public columnHeadlinePre(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): (v: ITreeVisitor) => void;
        public columnHeadlinePost(process: BuilderProcess, node: Parse.ColumnHeadlineSyntaxTree): void;
        public paragraphPre(process: BuilderProcess, name: string, node: Parse.NodeSyntaxTree): void;
        public paragraphPost(process: BuilderProcess, name: string, node: Parse.NodeSyntaxTree): void;
        public ulistPre(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): void;
        public ulistPost(process: BuilderProcess, name: string, node: Parse.UlistElementSyntaxTree): void;
        public olistPre(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): void;
        public olistPost(process: BuilderProcess, name: string, node: Parse.OlistElementSyntaxTree): void;
        public dlistPre(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): (v: ITreeVisitor) => void;
        public dlistPost(process: BuilderProcess, name: string, node: Parse.DlistElementSyntaxTree): void;
        public block_list_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_list_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_listnum_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_listnum_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_list(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_emlist_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_emlist_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_emlistnum_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_emlistnum_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_hd_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public inline_hd_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_br(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_b_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_b_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_code_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_code_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_href(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_label(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_tt_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_tt_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ruby_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): (v: ITreeVisitor) => void;
        public inline_ruby_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_u_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_u_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_kw_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): (v: ITreeVisitor) => void;
        public inline_kw_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_em_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_em_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public block_image(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public block_indepimage(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_img(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public inline_icon(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_footnote(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public inline_fn(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): boolean;
        public block_lead_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_lead_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_tti_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_tti_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ttb_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ttb_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public block_noindent(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): boolean;
        public block_source_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_source_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_cmd_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_cmd_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public block_quote_pre(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): (v: ITreeVisitor) => void;
        public block_quote_post(process: BuilderProcess, node: Parse.BlockElementSyntaxTree): void;
        public inline_ami_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_ami_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_bou_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_bou_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_i_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_i_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_strong_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_strong_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_uchar_pre(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
        public inline_uchar_post(process: BuilderProcess, node: Parse.InlineElementSyntaxTree): void;
    }
}


declare module ReVIEW {
    function start(setup: (review: Controller) => void, options?: IOptions): Book;
}

declare module "review.js" {
    export = ReVIEW;
}

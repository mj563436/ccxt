import Exchange from './abstract/bitfinex.js';
import { Balances, Int, OHLCV, Order, OrderBook, OrderSide, OrderType, Ticker, Tickers, Trade, Transaction } from './base/types.js';
/**
 * @class bitfinex
 * @extends Exchange
 */
export default class bitfinex extends Exchange {
    describe(): any;
    fetchTransactionFees(codes?: any, params?: {}): Promise<{}>;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        withdraw: {
            fee: number;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
        info: any;
    };
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<any[]>;
    amountToPrecision(symbol: any, amount: any): any;
    priceToPrecision(symbol: any, price: any): any;
    fetchBalance(params?: {}): Promise<Balances>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: any;
        timestamp: number;
        datetime: string;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: string;
    };
    parseTransferStatus(status: any): string;
    convertDerivativesId(currencyId: any, type: any): any;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchTickers(symbols?: string[], params?: {}): Promise<Tickers>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: any, market?: any): Ticker;
    parseTrade(trade: any, market?: any): Trade;
    fetchTrades(symbol: string, since?: Int, limit?: number, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    parseOrder(order: any, market?: any): Order;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    getCurrencyName(code: any): any;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    fetchDepositsWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransaction(transaction: any, currency?: any): Transaction;
    parseTransactionStatus(status: any): string;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<Transaction>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    nonce(): number;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}

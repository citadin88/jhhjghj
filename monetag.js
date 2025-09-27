(function(J, rj, Kj, jj) {
    (() => {
        // Character mapping object (from your original code)
        const charMap = {
            x: 'g', r: 'fdkFab', K: 'sqfBmdqzfZapq', j: '__raa', k: '__nmd', M: 'lrsefadmsq', b: '__BBG_BDR2', 
            E: 20, Y: 'lrsradymfe', S: 'radQmot', g: 0, C: '0', G: '1', h: '2', v: '3', O: '4', W: '5', c: '6', 
            p: '7', B: '8', Q: '9', V: '10', H: '11', n: '12', u: '13', z: 10, a: 'ftqz', X: 100, J: 'fz17ibe3p9w', 
            U: 'jwriq180zn', d: 'wbynb03cafp', Z: 'zzhri2', i: 299, w: 2147483647, I: null, l: 'KlD(ht&qwW7d-]ekI5=9xT^3cE~YiQaL*6#:u}ZNfMobH1)4F_0yvGA[jCVgOS2zpB!JU/XPR@8rn|sm,', 
            s: '', D: 'geqdMsqzfPmfm', A: '1pn9169r-90r4-4n2p-n517-no47mmn19o1r', e: '__ciq33iiqc__', t: '__xiwqyrp9c__', 
            y: 'puemnxqp-nk-eqdhqd', L: '__PX_EQEEUAZ_', N: 'lrspxbabgb', F: 'ZafUzUrdmyq', q: 300, R: 'auad8qp8qi', 
            m: 'yprw2ce', o: 131200, T: 131201, P: 'pqzqfegw.oay', f: 'nvyhamxldm', xr: 'nvDfzqFs', rr: 'uzfzf_d', 
            Kr: 'f_uzf', jr: 'azOxuowFdussqd', kr: 'lrsxampqpbabgb', Mr: 'pqruzqBdabqdfk', br: 'pqruzqBdabqdfuqe', 
            Er: 'sqfAizBdabqdfkPqeodubfade', Yr: 'sqfAizBdabqdfkEkynaxe', Sr: 'tmeAizBdabqdfk', gr: 'bdabqdfkUeQzgyqdmnxq', 
            Cr: 'zmh', Gr: 'xaomxEfadmsq', hr: 'geqdMsqzf', vr: 1e3, Or: 'ogddqzfEodubf', Wr: 'azqddad', cr: '(hmd mpometYmodae={)|memopz.oay', 
            pr: '(babomet\\.zqf\\/bab\\.ve|babomet\\.zqf)', Br: '(babmpeopz\\.zqf|o\\p\\.babmpe\\.zqf|babmpe\\.zqf\\/bab\\.ve)', 
            Qr: '(\\/\\/[m-l]+\\.[m-l]+\\/[r|d|f|u][m-lM-L0-9]{10,18}\\/[0-9]{4,5})', Vr: '(\\/\\/[M-Lm-l0-9]+\\.oxagprdazf\\.zqf\\/\\?[M-Lm-l0-9]+\\=[0-9]+)', 
            Hr: '(\\/\\/[\\i]+.[\\i]+.\\.\\i{2,5}\\/\\i{2}\\/\\i{2}\\/\\i{2}\\/[m-l0-9]+\\.ve|\\/\\/[\\i]+.[\\i]+.\\.\\i{2,5}\\/\\i{2,35}\\/uzhawq\\.ve)', 
            nr: '(tffb|tffbe):\\/\\/[m-l].*\\.oay\\/[m-l]\\/[m-lM-l0-9]{60,64}=qkV\\.ve', ur: 1, zr: 24, ar: 'rdayOtmdOapq', 
            Xr: 3, Jr: 'iuz', Ur: 'bdafafkbq', dr: function(){const obj={};const args=[].slice.call(arguments);for(let i=0;i<args.length-1;i+=2){obj[args[i]]=args[i+1]}return obj}, 
            Zr: 'vauz', ir: 'eqeeuazEfadmsq', wr: 'fqef', Ir: 5, lr: 60, sr: 'pao', Dr: 'oazzqofuaz', Ar: '(xasa|ndmzp)', 
            er: 'u', tr: '^nxan:', yr: 'PQNGS', Lr: 'UZRA', Nr: 2, Fr: 'IMDZ', qr: 'QDDAD', Rr: 4, mr: 'eqduqeEfmdf', 
            or: 'bbgOagzf', Tr: 'xmefBbg', Pr: 'oxuoweEuzoqEqeeuazEfmdf', fr: 'oxuoweEuzoqXmefBbg', xK: 'sqfFuyq', 
            rK: 'anvqof', KK: 'urdmyq', jK: 'qynqp', kK: 'hupqa', MK: 'mgpua', bK: 'xqzsft', EK: '.', YK: '%', SK: '{', 
            gK: 'dqcgqefMzuymfuazRdmyq', CK: 'iqnwufDqcgqefMzuymfuazRdmyq', GK: 'yalDqcgqefMzuymfuazRdmyq', hK: 'aDqcgqefMzuymfuazRdmyq', 
            vK: 'zadqrqddqd,zaabqzqd', OK: '_', WK: 'oazomf', cK: ' babqdnxaowqd', pK: 'dqpudqofFabIuzpai', BK: 'babgzpqdMrfqdOxuoweAnv', 
            QK: 'babgzpqd', VK: 'yageqpaiz', HK: 'oxuow', nK: 'yageqgb', uK: 'fagotqzp', zK: 'fagotefmdf', aK: 'dqpgoq', 
            XK: 'wqkpaiz', JK: 'bauzfqdpaiz', UK: 'bauzfqdgb', dK: 500, ZK: 'iqnhuqiDqpudqofGdx', iK: 'imufAzoxuow', 
            wK: 'wwb4m5j5fh', IK: 'paoQxqyqzf', lK: 'arreqfTqustf', sK: 'ymfot', DK: 800, AK: 171, eK: 110, tK: 'uzpqjAr', 
            yK: 'YEUQ', LK: 'efmzpmxazq', NK: 10802, FK: 'bayo', qK: 'uAEOxuowRuj', RK: 'mzpdaupOxuowRuj', mK: 'qzoapqGDUOaybazqzf', 
            oK: 'sqfTustQzfdabkHmxgqe', TK: 'dqeaxhq', PK: 'ruxfqd', fK: 5381, xj: 'dmoq', rj: 'tqustf', Kj: 'iupft', 
            jj: 'fab', kj: 'xqrf', Mj: 'eadf', bj: 'mppQhqzfXuefqzqd', Ej: 'iuft', Yj: 'za', Sj: 250, gj: 'uzfqzfAzOxuowGdx', 
            Cj: 'abqzBabeItqzUzUrdmyq', Gj: 'UzUrdmyqOmzZafQjuf', hj: '_nxmzw', vj: 'uaeEmrmduRuj', Oj: '#', Wj: 'ueEwuzEtaiuzs', 
            cj: 'hqdeuaz', pj: '&', Bj: 'bdqhqzfPagnxqXamp', Qj: 'iqnhuqiEmyqAdusuzDqpudqofGdx', Vj: 'azGeqdMofuhmfuaz', 
            Hj: 'dqhqdeq', nj: 'eod', uj: 'eodqqz', zj: 'lrspfwqk', aj: 'paogyqzfQxqyqzf', Xj: 'mbbxqiqnwuf', Jj: 'mzpdaup', 
            Uj: 'rudqraj', dj: 'su', Zj: 'uBtazq|uBmp|uBap', ij: 'Ymouzfaet', wj: 'GONdaieqd\\/', Ij: 'Abqdm Yuzu\\/', 
            lj: 'RNMH\\/', sj: 'Hqdeuaz\\/[^E]+Emrmdu', Dj: 'Qpsq\\/\\p+', Aj: 'KmNdaieqd', ej: 'oao_oao_ndaieqd', 
            tj: 'lazqUp', yj: 'bqdr', Lj: 'oaxxqofPqngsYqeemsq', Nj: 'abfuaze', Fj: '1bj', qj: 'mnagf:nxmzw', 
            Rj: 'uzvqofEodubf: mf xqmef gdx ad tfyx bmdmyqfqd ue dqcgudqp', mj: 'imufRadQxqyqzf', oj: 'bget', 
            Tj: function(a,b){return new RegExp(a,b)}, Pj: 'uzzqdTFYX', fj: 'efmow', xk: '?', rk: 'zmyq', Kk: 'mxxaiZazXuzwOxuowe', 
            jk: 'mximkeUrdmyqAhqdxmk', kk: 'omxx', Mk: 50, bk: 'napk', Ek: 'iuzpaiAbqzRqmfgdqe', Yk: '_fab', Sk: 'sqf', 
            gk: 'tdqr', Ck: 200, Gk: 'exuoq', hk: 'fmdsqf', vk: 'mpqj', Ok: 207, Wk: 'abqzHumPqewfabBabgzpqd', 
            ck: 'pqewfabBabgzpqdQhqdkitqdqXuzwe', pk: 'uAEOtdayqEimbBabgzpqd', Bk: 'yalUzzqdEodqqzJ', Qk: 'nqqsdqzgsal.oay', 
            Vk: 'qjoxgpqe', Hk: 'uzoxgpqe', nk: 'oxuowMzkitqdq', uk: 'taefzmyq', zk: 'qzfduqe', ak: 'mnYmfot', Xk: 'qddadOapq', 
            Jk: 'azoxuow', Uk: 'ogfAftqdBabe', dk: 'ekynax', Zk: 'Otdayq\\/([0-9]{1,})', ik: 'OduAE\\/([0-9]{1,})', 
            wk: 'Mzpdaup', Ik: 'Rudqraj', lk: 'OduAE\\/', sk: 'RjuAE', Dk: 'dqrqddqd', Ak: '; ih\\)', ek: 'oazzqofQzp', 
            tk: 'oazzqofEfmdf', yk: 'ueZmZ', Lk: 'paizxuzw', Nk: 'qrrqofuhqFkbq', Fk: 'fkbq', qk: 'dff', Rk: 'dmzpay', 
            mk: 'bab', ok: 'radymf', Tk: 'odqmfqQxqyqzf', Pk: 'abmoufk', fk: 'edo', xM: 'mbbqzpOtuxp', rM: 'dqyahqOtuxp', 
            KM: 'gdx', jM: 'tfyx', kM: 'ymb', MM: 'efdeodxane', bM: 'BabGzpqd', EM: 'mpenkvguok', YM: 'fvBabXampqp', 
            SM: 'BGQZSUZQ', gM: 'ombfgdqEfmowFdmoq', CM: 33, GM: 'mxx', hM: 'M', vM: 'RADY', OM: 'efmdfOxuow', 
            WM: 'urdmyqAhqdxmkAftqdBabe', cM: 'ymj', pM: 'sqfNagzpuzsOxuqzfDqof', BM: 'eodaxxFab', QM: 'eodaxxXqrf', 
            VM: 'dagzp', HM: 'rxaad', nM: 'abqzHumIuzpai3', uM: 'rady', zM: 'yqftap', aM: 'mofuaz', XM: 'egnyuf', 
            JM: 'faEfduzs', UM: 'abqz', dM: 'abqzHumYanuxqBabgzpqd', ZM: 'eodubf', iM: 'mekzo', wM: 'fmsGdx', IM: 'oxuqzfUp', 
            lM: 'oxuowUp', sM: 'fdmrruoEagdoqUp', DM: 'ogefayUp1', AM: 'omxxnmow', eM: 'amUp', tM: 'dgUp', yM: 'qmdxk-oxuow-bzp', 
            LM: 'ueUzfqdyqpumfqUybdqeeuazMhmuxmnxq', NM: 'sqfBdqhuageOxuow', FM: 'uzodqyqzfOxuowe', qM: 'ueUybdqeeuazMhmuxmnxq', 
            RM: 'uzodqyqzfUybdqeeuaze', mM: 'eqogdqBdqrqfot', oM: 'fdkFaOaxxqofBdqrqfotUybdqeeuaz', TM: 'radoqOxuow', 
            PM: 'zaBabIuftUzfqzf', fM: 'babRmxxnmow', xb: 'uAEEmrmduEimbBabgzpqd', rb: 'urdmyqIuzpaiAbqz', Kb: 'faXaiqdOmeq', 
            jb: 'xaomfuaz', kb: 'azxamp', Mb: 'ebxuf', bb: 'puemnxq', Eb: 'puemnxqMxx', Yb: 'efduzs', Sb: 'aa', gb: 'EERuj', 
            Cb: 'dqcgqefGdx', Gb: 'imufCgmxufkOtqow', hb: 'dgzOapq', vb: 'dqyahqEodubf', Ob: 'uzufEfmdf', Wb: 'ymtOxuowe', 
            cb: 'ueAzoxuowPuemnxqpUzWzaizIqnHuqi', pb: 'ewuz', Bb: 'geqdMofuhmfuaz', Qb: 'oaxxqofQddadYqeemsq', Vb: 'dgz', 
            Hb: 'qzgyqdmnxq', nb: 'oazrusgdmnxq', ub: 'idufmnxq', zb: 'hmxgq', ab: 'fzqyqxQfzqygoap', Xb: 'Hqdeuaz\\/', 
            Jb: '\\/f.oa\\n', Ub: 'sqfQzfduqe', db: 'eodubfXampBqdradymzoq', Zb: 'rb', ib: 'omfot', wb: 'efkxq', Ib: 'bmdqzfZapq', 
            lb: 'tqmp', sb: 'zaFdmowIuzpai', Db: '_bma', Ab: 'bgzpqdyuzubab', eb: '_efadmsq', tb: 'rgzofuaz', yb: 'XuqPqfqofad', 
            Lb: 'MmPqfqofad', Nb: 'XMEF_OADDQOF_QHQZF_FUYQ', Fb: 'geqdFdmowuzsUzfqdhmx', qb: 'bab_opz', Rb: 'bab_romb', 
            mb: 'BgEtaiz', ob: 'PaAbqz', Tb: 'oxw$bdb@wie', Pb: 'oxw$bdb@mnx', fb: 'qjaPkzmyuoBmdmye', xE: 'qjaVeBab101', 
            rE: 'otmdOapqMf', KE: '=', jE: 'bdqhqzfPqrmgxf', kE: 'abqzBabgzpqd:iuz', ME: 'oxaeqp', bE: 'ii', EE: 'EE', 
            YE: 'xuzw', SE: 'odqmfqUA', gE: 'dqyahqUA', CE: 'urdmyqAhqdxmk', GE: 'oxuqzfTqustf', hE: 'eodaxxTqustf', 
            vE: 25, OE: 'bmsqKArreqf', WE: 'bmsqJArreqf', cE: 'oxuqzfFab', pE: 'oxuqzfXqrf', BE: 'oqux', QE: 'zefa', 
            VE: 'raoge', HE: 'pefGdx', nE: 'qhqzf', uE: 'edoQxqyqzf', zE: 'bbg', aE: 'bab-abqz', XE: 'eturf', JE: 36, 
            UE: 'dqbxmoq', dE: '__pe3poh__', ZE: 'paogyqzf', iE: 'oaawuq', wE: '; bmft=/;', IE: 'bdqrqfotMpGdxFfx', 
            lE: 'bdqrqfotMpQzmnxqp', sE: 'rdqc-xuyuf', DE: 'qmdxk-oxuow-bze', AE: 'qybfk', eE: 'zqjf-b-xq', tE: 'lrsazoxuowetaiz', 
            yE: 'uzfqdyqpumfqBmsq:zaXuzw', LE: 201, NE: 'pagnxqOxuow', FE: 'puemnxqp', qE: 203, RE: 'zaUybdqeeuazMhmuxmnxq', 
            mE: 204, oE: 'qjoxgpqpOxuow', TE: 205, PE: 'uzfqdyqpumfqBmsq', fE: 206, xY: 'gmo', rY: 'bdqrqfotMpAbfuaze', 
            KY: 'pqewfabOtdayqRujBabgzpqd', jY: 'pqewfabBabgzpqdQhqdkitqdq', kY: 'yanuxqBabgzpqdFmdsqfNxmzwXuzwe', 
            MY: 'yanuxqBabGbFmdsqfNxmzwXuzwe', bY: 'uaeEmrmduIuzpaiAbqz', EY: 'mffmotQhqzf', YY: 'fmsZmyq', SY: 'mssdqeeuhq', 
            gY: 'bmdqzfQxqyqzf', CY: 'bnIuzpaiAbqz', GY: 'sqfMffdungfq', hY: 'j', vY: 'd', OY: 'W', WY: 'v', cY: 'w', 
            pY: 'Y', BY: 'n', QY: 'Q', VY: 'g1hyh1r6xx', HY: 'frrnq://kw.prkypi.lcr/egb.hq', nY: 'qwlaGb', uY: 'qwlaMpgegl', 
            zY: 'qwlaByrc', aY: 'eclcpyrcbEgb', XY: 'gqQwlagle', JY: 'qwlaAyjjzyaiq', UY: 'K', dY: 'E', ZY: 14, iY: 's', 
            wY: 'egbpyrmp', IY: 'O', lY: 'ajgclr', sY: 'S', DY: 't', AY: 2e3, eY: 'h', tY: 3e3, yY: 'A', LY: 1e4, NY: 'I', 
            FY: 'o', qY: 'b', RY: 'N', mY: 'pmslb', oY: 'C', TY: 'H', PY: 'rmn', fY: 'T', xS: 'slbcdglcb', rS: 'z', 
            KS: 'rpsc', jS: 'qapgnr', kS: 'l', MS: 'pylbmk', bS: 'm', ES: 'J', YS: 'apcyrcCjckclr', SS: 'jv', gS: 'ynnclbAfgjb', 
            CS: 'G', GS: 'pckmtcAfgjb', hS: 'p', vS: 'hmgl', OS: 'L', WS: 'nsqf', cS: 'bmaskclr', pS: 'i', BS: 'bmaskclrCjckclr', 
            QS: 'U', VS: 'kyn', HS: 'x', nS: 'ECR', uS: 'e', zS: 'lcvr', aS: 'P', XS: 'ecrRgkc', JS: 'mncl', US: 'q', 
            dS: 'ugrfApcbclrgyjq', ZS: 'f', iS: 'rgkcmsr', wS: 'k', IS: 'mlcppmp', lS: 'X', sS: 'mlrgkcmsr', DS: 'Z', 
            AS: 'mljmyb', eS: 'R', tS: 'qclb', yS: 'c', LS: 'dmpCyaf', NS: 'D', FS: 'jclerf', qS: 'y', RS: 'a', mS: 'bmlc', 
            oS: 'F', TS: 'yLyyLLLLLLyyLLLLLLLLLyLyLyyyyLLL', PS: 'B', fS: 'qnjgr', xg: 'r', rg: 'qjgac', Kg: 'jd', jg: 'rfcl', 
            kg: 'dd', Mg: 'Wd', bg: 'tyjsc', Eg: 'vd', Yg: 'ynnjw', Sg: 'wd', gg: 'dpmkAfypAmbc', Cg: 'Yd', Gg: 'nd', 
            hg: 'pcqmjtc', vg: 'Qd', Og: 97, Wg: 'Kd', cg: 122, pg: 'Ed', Bg: 48, Qg: 'sd', Vg: 57, Hg: 'Od', ng: 'rfpmu', 
            ug: 'Sd', zg: 'egb', ag: 'td', Xg: 'nypqc', Jg: 'hd', Ug: 'pcqnmlqc', dg: 'eqfFuyqagf', Zg: 'qeombq', ig: '248_4_NE', 
            wg: '0.0.7', Ig: 'sgdm', lg: 'etmbshnm', sg: 'vdacqhudq', Dg: 'oktfhmr', Ag: 'rbqddmW', eg: 'rbqddmX', tg: 'zuzhkGdhfgs', 
            yg: 'bkhdmsVhcsg', Lg: 'kdmfsg', Ng: 'gqde', Fg: 'qdedqqdq', qg: 'kzmftzfd', Rg: 'ghccdm', mg: 'tmcdehmdc', 
            og: 'fdsGhfgDmsqnoxUzktdr', Tg: 'qdrnkud', Pg: 'sdrs', fg: 'rdke', xC: 'sno', rC: 'fdnknbzshnm', KC: 'lzwSntbgOnhmsr', 
            jC: 'vhcsg', kC: 'gdhfgs', MC: 'ntsdqVhcsg', bC: 'ntsdqGdhfgs', EC: 'hmmdqVhcsg', YC: 'hmmdqGdhfgs', SC: 'rbqddm', 
            gC: 'cnbtldmsDkdldms', CC: 'eqzldr', GC: 'knbzshnm', hC: 'cnbtldms', vC: 'mzuhfzsnq', OC: 'kdudk', WC: 'bgzqfhmf', 
            cC: 'uhrhahkhsxRszsd', pC: 'trdqZfdms', BC: 'ghk', QC: 'iro', VC: 'mf', HC: 'hw', nC: 'gs', uC: 'os', zC: 'ss', 
            aC: 'mo', XC: 'Qs', JC: 'mv', UC: 'ps', dC: 'ma', ZC: 'Fs', iC: 'rv', wC: 'Ws', IC: 'rg', lC: 'Ks', sC: 'ok', 
            DC: 'ls', AC: 'vx', eC: 'cs', tC: 'vw', yC: 'Es', LC: 'vv', NC: 'ys', FC: 'vg', qC: 'Is', RC: 'bv', mC: 'hs', 
            oC: 'vhv', TC: 'us', PC: 'vhg', fC: 'bs', xG: 'veb', rG: 'Hs', KG: 'rzg', jG: 'ks', kG: 'mzukmf', MG: 'Ds', 
            bG: 'cqe', EG: 'Ps', YG: 'vfk', SG: 'rs', gG: 'sa', CG: 'Cs', GG: 'asy', hG: 'Ss', vG: 'asn', OG: 'Js', WG: 'oms', 
            cG: 'Gs', pG: 'omqb', BG: 'alk', QG: 'ns', VG: 'alh', HG: 'Ns', nG: 'urak', uG: 'zs', zG: 'mzuhfzsd', aG: 'ws', 
            XG: 'qdknzc', JG: 'is', UG: 'azbj_enqvzqc', dG: 'qs', ZG: 'Ms', iG: 'oqdqdmcdq', wG: 'Zs', IG: 'Rs', lG: 'trdqZfdmsCzsz', 
            sG: 'Bs', DG: 'gzrNvmOqnodqsx', AG: 'Ts', eG: 'rdmcAdzbnm', tG: 'as', yG: 'bzkkOgzmsnl', LG: 'As', NG: '_ogzmsnl', 
            FG: 'Ys', qG: 'bzmuzr', RG: 'Ls', mG: 'VDAFK_cdatf_qdmcdqdq_hmen', oG: 'fs', TG: 'qoo', PG: 'ds', fG: 'syn', 
            xh: 'Vs', rh: 'sr_cdsdbsdc', Kh: 'Os', jh: 'irtz', kh: 'xs', Mh: 'mom', bh: 'es', Eh: 'thc', Yh: 'ts', Sh: 'sy', 
            gh: 'Us', Ch: 'mzo', Gh: 'Xs', hh: 'duzk', vh: 'js', Oh: 'gb', Wh: 'vs', ch: 'cl', ph: 'ms', Bh: 'qss', Qh: 'gQ', 
            Vh: 'bg_nai', Hh: 'sQ', nh: 'nrbot', uh: 'QQ', zh: 'bg_nai_hmcdw', ah: 'pQ', Xh: 'vhm_jdxr_kdmfsg', Jh: 'FQ', 
            Uh: 'bnknq_cdosg', dh: 'WQ', Zh: 'udmcnq', ih: 'KQ', wh: 'fzldozcr', Ih: 'lQ', lh: 'bnknq_fzlts', sh: 'cQ', 
            Dh: 'oek', Ah: 'EQ', eh: 'brh', th: 'yQ', yh: 'bks', Lh: 'IQ', Nh: 'ghccdm_heqzld', Fh: 'hQ', qh: 'azs', 
            Rh: 'uQ', mh: '(hognmd|hozc|zmcqnhc|(vhmcnvr ognmd))', oh: 'bQ', Th: 'HQ', Ph: 'shldYnmd', fh: 'kQ', xv: 'bqdzsdDkdldms', 
            rv: 'DQ', Kv: 'fdsDwsdmrhnm', jv: 'PQ', kv: 'bgqnld', Mv: 'rQ', bv: 'odqenqlzmbd', Ev: 'CQ', Yv: 'ptzkhsxNoshnmr', 
            Sv: 'SQ', gv: 'bkhdmsGhmsr', Cv: 'JQ', Gv: 'fdsAzssdqx', hv: 'GQ', vv: 'dwodqhldmszk-vdafk', Ov: 'oQ', Wv: 'vdafk', 
            cv: 'nQ', pv: 'NQ', Bv: '7936ycxgta8hx9zimjq4ml', Qv: 'zQ', Vv: 'dmbncdTQHBnlonmdms', Hv: 'wQ', nv: 'bzsbg', 
            uv: 'iQ', zv: 'fdsShldynmdNeerds', av: 'qQ', Xv: 'fdsBnmsdws', Jv: 'MQ', Uv: 'fdsOzqzldsdq', dv: 'ZQ', Zv: 'qh', 
            iv: 'RQ', wv: 'qu', Iv: 'BQ', lv: 'rzv', sv: 'TQ', Dv: 'bg', Av: 'aQ', ev: 'oc', tv: 'AQ', yv: 'vc', Lv: 'YQ', 
            Nv: 'mk', Fv: 'LQ', qv: 'mkr', Rv: 'fQ', mv: 'okzsenql_cdsdbsnq', ov: 'dQ', Tv: 'mdr', Pv: 'VQ', fv: 'ghmsr', 
            xO: 'OQ', rO: 'rsqhmf', KO: 'xQ', jO: 'asnz', kO: 'eQ', MO: 'TMLZRJDC_QDMCDQDQ_VDAFK', bO: 'tQ', EO: 'GdzckdrrBgqnld', 
            YO: 'UQ', SO: '(bgqnld|bgqnlhtl)', gO: 'XQ', CO: 'nodqz', GO: 'jQ', hO: 'lncdk', vO: 'vQ', OO: 'okzsenql', 
            WO: 'mQ', cO: 'okzsenqlUdqrhnm', pO: 'gp', BO: 'tzEtkkUdqrhnm', QO: 'sp', VO: 'Qp', HO: 'qdrnkudcNoshnmr', 
            nO: 'pp', uO: 'Fp', zO: 'otrg', aO: 'Wp', XO: 6, JO: 'Kp', UO: 7, dO: 'lp', ZO: 8, iO: 'cp', wO: 9, IO: 'Ep', 
            lO: 'yp', sO: 11, DO: 'Ip', AO: 12, eO: 'hp', tO: 13, yO: 'up', LO: 'bp', NO: 15, FO: 'Hp', qO: 16, RO: 'kp', 
            mO: 17, oO: 'Dp', TO: 18, PO: 'Pp', fO: 19, xW: 'rp', rW: 'Cp', KW: 21, jW: 'Sp', kW: 22, MW: 'Jp', bW: 23, 
            EW: 'Gp', YW: 'op', SW: 'np', gW: 26, CW: 'Np', GW: 27, hW: 'zp', vW: 28, OW: 'wp', WW: 'inhm', cW: 'ip', 
            pW: 'bkhdms_hc', BW: 'qp', QW: 'tmjmnvm', VW: 'Mp', HW: 'zeehkhzsd_hc', nW: 'Zp', uW: 'sqzeehb_rntqbd_hc', 
            zW: 'Rp', aW: 'zcudqshrdq_hc', XW: 'Bp', JW: 'bzlozhfm_hc', UW: 'Tp', dW: 'btrsnl_hc_1', ZW: 'ap', iW: 'btrsnl_hc_2', 
            wW: 'Ap', IW: 'bkhbj_hc', lW: 'Yp', sW: 'bnrs', DW: 'Lp', AW: 'ldsgnc', eW: 'fp', tW: 'irszf', yW: 'dp', 
            LW: 'q_thc', NW: 'Vp', FW: 'nz_hc', qW: 'Op', RW: 'zcchshnmzk_hcr', mW: 'xp', oW: 'mzld', TW: 'ep', PW: 'nmsntbgrszqs', 
            fW: 'tp', xc: 'OktfhmZqqzx', rc: 'Up', Kc: 'fdsFzldozcr', jc: 'Xp', kc: 'hr_zmcqnhc', Mc: 'jp', bc: 'hr_sqhcdms', 
            Ec: 'vp', Yc: 'hr_bgqnlhtl_86_nq_mdvdq', Sc: 'mp', gc: 'hr_bgqnlhtl', Cc: 'gF', Gc: 'hr_dcfd', hc: 'sF', 
            vc: 'hr_fdbjn', Oc: 'QF', Wc: 'hr_vda_jhs', cc: 'pF', pc: 'hr_vda_jhs_606_nq_mdvdq', Bc: 'FF', Qc: 'hr_cdrjsno_rzezqh', 
            Vc: 'WF', Hc: 'hr_bgqnlhtl_nodqz', nc: 'KF', uc: '__cr3cbu__', zc: 'lF', ac: 'rsqhmfhex', Xc: 'cF', Jc: 'lnahkd', 
            Uc: 'EF', dc: '-2', Zc: 'yF', ic: ';', wc: 'IF', Ic: 'ozqrd', lc: 'hF', sc: 'bkhdmsHc', Dc: 'uF', Ac: 'zeehkhzsdHc', 
            ec: 'bF', tc: 'sqzeehbRntqbdHc', yc: 'HF', Lc: 'zcudqshrdqHc', Nc: 'kF', Fc: 'bzlozhfmHc', qc: 'DF', Rc: 'btrsnlHc1', 
            mc: 'PF', oc: 'btrsnlHc2', Tc: 'rF', Pc: 'bkhbjHc', fc: 'CF', xp: 'qtHc', rp: 'SF', Kp: 'nzHc', jp: 'JF', 
            kp: 'jdxr', Mp: 'GF', bp: 'CzsdShldEnqlzs', Ep: 'oF', Yp: 'qdb2020', Sp: 'nF', gp: 'o3', Cp: 'NF', Gp: 'rqfa', 
            hp: 'zF', vp: 'knzcShldr', Op: 'wF', Wp: 'zcchshnmzkHcr', cp: 'iF', pp: 'mzuhfzshnm', Bp: 'qF', Qp: 'lrLzwSntbgOnhmsr', 
            Vp: 'MF', Hp: 'nmknzcS', np: 'ZF', up: 'ozfdS', zp: 'RF', ap: 'rszqsD', Xp: 'BF', Jp: 'sqzm', Up: 'TF', dp: 'ogzmsnlir', 
            Zp: 'aF', ip: 'fdsDmsqhdrAxSxod', wp: 'AF', Ip: 'lny-vdafk', lp: 'YF', sp: 'TMLZRJDC_UDMCNQ_VDAFK', Dp: 'LF', 
            Ap: 'mnv', ep: 'fF', tp: 'llg', yp: 'dF', Lp: 'eqnlBgzqBncd', Np: 'VF', Fp: 'hmcdwNe', qp: 'OF', Rp: 'qntmc', 
            mp: 'xF', op: 'Hmsk', Tp: 'eF', Pp: 'gzqcvzqdBnmbtqqdmbx', fp: 'tF', xB: 'mtladq', rB: 'UF', KB: 'cduhbdLdlnqx', 
            jB: 'XF', kB: 'bnknqCdosg', MB: 'jF', bB: 'hrAnsAxOzfdS', EB: 'vF', YB: 'vdajhs-3c', SB: 'mF', gB: 'ehkdmzld', 
            CB: 'gW', GB: 'lzo', hB: 'sW', vB: ',', OB: 'QW', WB: 'bgzqBncdZs', cB: 'pW', pB: 'rszbj', BB: 'FW', QB: 'snRsqhmf', 
            VB: 'WW', HB: 'bnmbzs', nB: 'KW', uB: 'bnmmdbshnm', zB: 'lW', aB: 'zmbdrsnqNqhfhmr', XB: 'cW', JB: '0123456789zabcde', 
            UB: 'EW', dB: 'qdchqdbsBntms', ZB: 'yW', iB: 'zuzhkVhcsg', wB: 'IW', IB: 'bkhdmsGdhfgs', lB: 'hW', sB: 'hrOH', 
            DB: 'uW', AB: 'mHrOH', eB: 'bW', tB: 'lzsbgdr', yB: 'HW', LB: 'bnllhsKnzcShld', NB: 'kW', FB: 'bnmmdbshnmHmen', 
            qB: 'DW', RB: 'ehmhrgCnbtldmsKnzcShld', mB: 'PW', oB: 'ehmhrgKnzcShld', TB: 'rW', PB: 'ehqrsOzhmsZesdqKnzcShld', 
            fB: 'CW', xQ: 'ehqrsOzhmsShld', rQ: 'SW', KQ: 'mzuhfzshnmSxod', jQ: 'JW', kQ: 'momMdfnshzsdcOqnsnbnk', MQ: 'GW', 
            bQ: 'qdptdrsShld', EQ: 'oW', YQ: 'rszqsKnzcShld', SQ: 'nW', gQ: 'vzrZksdqmzsdOqnsnbnkZuzhkzakd', CQ: 'NW', 
            GQ: 'vzrEdsbgdcUhzRocx', hQ: 'zW', vQ: 'vzrMomMdfnshzsdc', OQ: 'wW', WQ: 'ogzmsnl', cQ: 'iW', pQ: 'kzmftzfdr', 
            BQ: 'qW', QQ: 'LRBRRLzsqhw', VQ: 'MW', HQ: 'lrRdsHlldchzsd', nQ: 'ZW', uQ: 'lrHmcdwdcCA', zQ: 'RW', aQ: 'lrOnhmsdqDmzakdc', 
            XQ: 'BW', JQ: 'vdajhsOdqrhrsdmsRsnqzfd', UQ: 'TW', dQ: 'vdajhsSdlonqzqxRsnqzfd', ZQ: 'aW', iQ: 'vdajhsQdrnkudKnbzkEhkdRxrsdlTQK', 
            wQ: 'AW', IQ: 'AzssdqxLzmzfdq', lQ: 'YW', sQ: 'vdajhsLdchzRsqdzl', DQ: 'LW', AQ: 'vdajhsRoddbgFqzllzq', eQ: 'fW', 
            tQ: 'ZookdOzxDqqnq', yQ: 'dW', LQ: 'BRROqhlhshudUzktd', NQ: 'VW', FQ: 'Bntmsdq', qQ: 'OW', RQ: 'fdsRsnqzfdToczsdr', 
            mQ: 'xW', oQ: 'VdaJhsLdchzJdxr', TQ: 'eW', PQ: 'athkcHC', fQ: 'tW', xV: 'LdchzQdbnqcdqDqqnqDudms', rV: 'UW', 
            KV: 'lnyHmmdqRbqddmW', jV: 'XW', kV: 'BRRLnyCnbtldmsQtkd', MV: 'jW', bV: 'BzmuzrBzostqdLdchzRsqdzl', EV: 'vW', 
            YV: ':', SV: 'mW', gV: 'enqDzbg', CV: 'gK', GV: 128, hV: 'sK', vV: 'lrVqhsdOqnehkdqLzqj', OV: 'QK', WV: 'LRRsqdzl', 
            cV: 'pK', pV: 'lrKztmbgTqh', BV: 'FK', QV: 'lrRzudAkna', VV: 'WK', HV: 'rzezqh', nV: 'KK', uV: 'rsxkd', zV: 'lK', 
            aV: 'QSBDmbncdcZtchnEqzld', XV: 'cK', JV: '[naidbs Hmsk]', UV: 'EK', dV: '[naidbs Qdekdbs]', ZV: 'yK', iV: 'CNLQdbsKhrs', 
            wV: 'IK', IV: 'QSBOddqBnmmdbshnmHbdDudms', lV: 'hK', sV: 'RUFFdnldsqxDkdldms', DV: 'uK', AV: 'nmsqzmrhshnmbzmbdk', 
            eV: 'bK', tV: 'nmnqhdmszshnmbgzmfd', yV: 'HK', LV: 'nqhdmszshnm', NV: 'kK', FV: 'hr_azs', qV: 'DK', RV: 'bgzqfhmf_shld', 
            mV: 'PK', oV: 'chrbgzqfhmf_shld', TV: 'rK', PV: 'zcdw_szf_udqrhnm', fV: 'CK', xH: 'lzsbgLdchz', rH: 'SK', KH: 'Fnnfkd', 
            jH: 'JK', kH: 'Zookd', MH: 'GK', bH: 'ehksdq', EH: 'oK', YH: 'CduhbdLnshnmDudms', SH: 'nK', gH: 'nmfdrstqddmc', 
            CH: 'NK', GH: 'rszmczknmd', hH: 'zK', vH: 'LdchzRdsshmfrQzmfd', OH: 'wK', WH: 'RgzqdcVnqjdq', cH: 'iK', pH: 'zrxmb', 
            BH: 'qK', QH: ')', VH: 'MK', HH: 'hr_lnahkd', nH: 'ZK', uH: 'sxod', zH: 'RK', aH: '(bnknq-fzlts:', XH: 'BK', 
            JH: 'LnyZoodzqzmbd', UH: 'TK', dH: 'rdzqbg', ZH: 'aK', iH: 'adenqd', wH: 'AK', IH: 'nardqud', lH: 'YK', sH: 'Qdekdbs', 
            DH: 'LK', AH: 'zooUdqrhnm', eH: 'fK', tH: 'zarnktsd', yH: 'dK', LH: '50%', NH: 'VK', FH: '9999', qH: 'OK', RH: '1ow', 
            mH: 'xK', oH: 'sqzmrozqdms', TH: 'eK', PH: 'nr', fH: 'tK', xn: 'nr_udqrhnm', rn: 'UK', Kn: 'zmcqnhc_lncdk', jn: 'XK', 
            kn: 'aqnvrdq_udqrhnm', Mn: 'jK', bn: 'chu', En: 'vK', Yn: 'hc', Sn: 'mK', gn: 'zcdw', Cn: 'gl', Gn: 'ancx', hn: 'sl', 
            vn: 'zmcqnhc', On: 'Ql', Wn: 'bkhdmsHmenqlzshnm', cn: 'pl', pn: 'rdsZssqhatsd', Bn: 'Fl', Qn: 'onrhshnm', Vn: 'Wl', 
            Hn: 'kdes', nn: 'Kl', un: 'yHmcdw', zn: 'll', an: 'azbjfqntmcBnknq', Xn: 'ptdqxRdkdbsnq', Jn: 'El', Un: 'rjho', 
            dn: 'yl', Zn: 'rxmb4rxmb', in: 'Il', wn: 'snKnvdqBzrd', In: 'hl', ln: 'shldnts', sn: 'ul', Dn: 'szfUdqrhnm', An: 'bl', 
            en: 'rxmb', tn: 'Hl', yn: 'zkk', Ln: 'kl', Nn: 'bgzqfhmfShld', Fn: 'Dl', qn: 'chrbgzqfhmfShld', Rn: 'Pl', mn: 'qzv', 
            on: 'rl', Tn: 'hrHmsdqrdbshmf', Pn: 'Cl', fn: 'zesdq_shldnts', xu: 'Sl', ru: 'qdlnud', Ku: 'Jl', ju: 'chrbnmmdbs', 
            ku: 'Gl', Mu: 'zrrhfm', bu: 'oazfuzgqIadw', Eu: 'uoxuow-h1.1578.0', Yu: 'bmdeq', Su: 'meeusz', gu: 'geqMmnLazq', 
            Cu: 've_nguxp', Gu: 'qzmnxqBqdradmfad', hu: 'fdkFaQeombqUrdmyq', vu: 'sqfAgfRdayUrdmyq', Ou: 'azoxuowRudef', 
            Wu: 'lrsazoxuowrudef', cu: 'bmsqAzPaymuzEqduqeRadXuyXa', pu: 'abfuazeOmotqFFX', Bu: 'ne', Qu: 'urdmyq[pmfm-iupsqf]', 
            Vu: 'azEwuzOxuowFdussqd', Hu: 'qzmnxqGeqdMofuhmfuaz', nu: 'puemnxqGeqdMofuhmfuaz', uu: 30, zu: 'bmdqzf', au: 'bqdradymzoq', 
            Xu: 'pmfmeqf', Ju: 'oazfqzfIuzpai', Uu: 'fmdsqfQxqyqzf', du: 'babgzpqd:xuzw', Zu: 'babgzpqd:rmux', iu: 'rujqp', 
            wu: '100%', Iu: 'urdmyqAhqdxmkMppAhqdxmk', lu: 'uzzqdTqustf', su: 'zaAhqdxmke', Du: 'mppAhqdxmke', Au: 'dgzAhqdxmkRmuxqp', 
            eu: 'abqzqd', tu: 'bdqrqfotMp_', yu: 'dqmeaz', Lu: 'zqjf-b-zp', Nu: 'zqjf-b-ze', Fu: 'uzfqdyqpumfqBmsqEkynuaeue', 
            qu: 'qjfqdzmxXuzwBabgzpqd', Ru: 'ueMofuhq', mu: 'radoq_nmzzqd', ou: 'mr', Tu: 'ueMmn', Pu: 'omfGdx', fu: 'bmo:nqradq', 
            xz: 56, rz: 'eqxqofad', Kz: 'oazfqzfPaogyqzf', jz: 'etaiEwuz', kz: 'fqjf/vmhmeodubf', Mz: 'yyt', bz: 'oxuoweOagzf', 
            Ez: 'qeombqFaBmdqzf', Yz: 'azoxuowRudefGxfuymfq', Sz: 'bbgCzfk', gz: 'uys', Cz: 'eqfBdabqdfk', Gz: 'uybadfmzf', 
            hz: 'lUzpqj', vz: '-100', Oz: '-10000bj', Wz: 'puebxmk', cz: 'nxaow', pz: 'baeufuaz', Bz: 'mneaxgfq', Qz: 'hueunuxufk', 
            Vz: 'tuppqz', Hz: '/', nz: 'eagdoqLazqUp', uz: 'paymuz', zz: 'sqzqdmfuazFuyq', az: 'qjfdm', Xz: 'yapqx', Jz: 'bxmfrady', 
            Uz: 'bxmfradyHqdeuaz', dz: 'gmRgxxHqdeuaz', Zz: 'tmeEotqyq', iz: 'eqmdot', wz: 'sqfNmffqdk', Iz: 'babgzpqd:rady', 
            lz: 'babgzpqd:zaiuz', sz: 'sqfEqeeuazPmfm', Dz: 'dustf', Az: 'naffay', ez: '$US$', tz: 'mppAhqdxmk', yz: 'cgqdkEqxqofadMxx', 
            Lz: 'abqzHumIuzpai1', Nz: 'abqzHumIuzpai2', Fz: 'abqzHumIuzpai', qz: 'nxgd', Rz: 'eqfMffdungfq', mz: 'dqx', 
            oz: 'abqzMppufuazmxFmne3', Tz: 'abqzMppufuazmxFmne4', Pz: 'abqzRadUAEzafEmrmdu1', fz: 'abqzRadUAEzafEmrmdu2', 
            xa: 'abqzRadUAEzafEmrmdu', ra: 'UZBGF', Ka: 'NGFFAZ', ja: 'abqzHumPqewfabXuzwBabgzpqd2', ka: 'abqzRadUAEEmrmdu', 
            Ma: 'sqfQxqyqzfeNkFmsZmyq', ba: '-', Ea: 'ebqe', Ya: 'faGFOEfduzs', Sa: '=fdgq; qjbudqe=', ga: 'xamp', Ca: 'qddad', 
            Ga: 'tffbe://flqsuxa.oay/efmffms.ve', ha: 'dmfq', va: 'uoxuow', Oa: 'Mpqj efmfge ue zgxx', Wa: 'bmo:abqz', ca: 209, 
            pa: 'bauzfqdPaiz', Ba: '2147483647', Qa: 'mgfa', Va: '?pahd=fdgq', Ha: 'px', na: 'pxp', ua: 'UzUrdmyqOmzQjuf', 
            za: '#.*$', aa: 'fqjf', Xa: 'eqfAbfuaze', Ja: 'sgy', Ua: 'ef', da: 'py', Za: 'dgup', ia: 'eqmdotBmdmye', wa: 'eqfEoabq', 
            Ia: 'qzmnxq', la: 'xuyXa', sa: 'sqfNdaieqdEqeeuaz', Da: 'amup', Aa: 'dqssgnqp', ea: 'yanuxq', ta: 'fdgq', ya: 'pqrqd', 
            La: 'rqfotBduadufk', Na: 'rqfotbduadufk', Fa: 'tust', qa: 'tffbe://', Ra: '//', ma: 'uoxuow-', oa: 'abqzBabgzpqd', 
            Ta: 'bdqhuageOxuow', Pa: 'zaAhqdxmk:babgzpqd', fa: 'puemnxqpAhqdxmke', xX: 'ubbQjoxgpqe', rX: 'yalBmuzfOagzf', 
            KX: 'oxaeq', jX: 'tmeMffdungfq', kX: 'zaabqzqd zadqrqdqd', MX: 'zapqZmyq', bX: 'abqzHumPqewfabXuzwBabgzpqd1', 
            EX: 'abqzHumPqewfabXuzwBabgzpqd', YX: 'fmdsqfFagotqe', SX: '&br_radymf=ve&y=xuzw', gX: 'dqfgdz=', CX: 'bmo:rmxxnmow', 
            GX: 'bmo:qybfk', hX: 208, vX: 'dqyahqQhqzfXuefqzqd', OX: 'dup.qxaezao', WX: 'bauzfqdQhqzfe', cX: 'radoqNmzzqd', 
            pX: 'radoqUb', BX: 'zmfuhq', QX: 'wqke', VX: 'efduzsurk', HX: 'fmsAbfuaze', nX: 'eqeeuaz', uX: 'ro', zX: 'ruzp', 
            aX: 'hmxgqe', XX: 'xmhq', JX: 'on', UX: 'omzEqzpYqfduoe', dX: 'yqeemsqe', ZX: 'eoabq', iX: 'qddadYmb', wX: 'pqngsFuyqagf', 
            IX: 'eqzpUzfqdhmx', lX: 'bmsqtupq', sX: 'oaxxqofYqeemsq', DX: 'oaawuqEkzoqd', AX: 'zadqrqddqd zaabqzqd', eX: 'zazq', 
            tX: 'pmfm', yX: 'paymuzPmfm', LX: 'oxaeqOagzf', NX: 'eqfEqeeuazPmfm', FX: 'gbpmfqp', qX: 'OAXXQOF_UYBDQEEUAZ_FDUQE', 
            RX: 'fuyqXampqp', mX: 'ueBdqrqfotuzs', oX: 'ueUybdqeeuazOaxxqofqp', TX: 'rudefBdqrqfotEfmdf', PX: 'rudefBdqrqfotPazq', 
            fX: 'puemnxqpNkEqdhqdDqmeaze', xJ: 'etagxpGeqBdqrqfotGdx', rJ: 'oxuqzfJ', KJ: 'oxuqzfK', jJ: 'rmxxnmow', kJ: '&ne=', 
            MJ: 'oxuowFdmowGdx', bJ: 'eqzpNqmoaz', EJ: 'puh', YJ: '/4/', SJ: 'hmd', gJ: 'ndmzot', CJ: 'ormekzo', GJ: 'radoq_ub', 
            hJ: 'adusuz', vJ: 'so', OJ: 'otuxpZapqe', WJ: 'dqyahqEodubfMrfqdXamp ', cJ: 36e5, pJ: 'otqowEqeeuazOgefayWqk', 
            BJ: 'NMOWOXOW', QJ: 'dgzOapq ', VJ: 'wqk', HJ: 'qjfdmEodubfQhqz', nJ: 'qjfdmEodubfApp', uJ: 'eagdeqPuh', zJ: 'dqxmfuhq', 
            aJ: 'eqfUfqy', XJ: 'sqfUfqy', JJ: 'dqyahqUfqy', UJ: .5, dJ: 'abqzBabgzpqd:zaf-abqzqp', ZJ: 'abqzBabgzpqd:oxaeqp', 
            iJ: 'bmftzmyq', wJ: 'oxmeeZmyq', IJ: 'abqzMppufuazmxFmne', lJ: 55, sJ: 'ogddqzfFmdsqf', DJ: 'bdqrqfotMpGdx', 
            AJ: 'pdkDgz', eJ: 'ffx', tJ: 'bgetGdx', yJ: 'exupqdGdx', LJ: 'huszqffqGdx', NJ: 'uzBmsqBgetGdx', FJ: 'qjfdmAzoxuowGdx', 
            qJ: 'uzfqdefufumxGdx', RJ: 'pqrmgxfXuefqzqd', mJ: 'oxuowXuefqzqd', oJ: 'mbg\\.btb\\?lazqup=\\p{7}', TJ: '\\/5\\/\\p{7}', 
            PJ: 'Uz-Bmsq Bget', fJ: 'uzeqdfDgxq', xU: 'zgynqd', rU: 'MMN', KU: 'MMN VE', jU: 'MMN BTB', kU: 'az', MU: 'ekzo', 
            bU: 'cgmxufk_abfuaze', EU: 'oxuqzf_tuzfe', YU: 'BAEF', SU: 'iuftOdqpqzfumxe', gU: 'abfuazeDqcgqef', CU: 'rdayOmotq', 
            GU: 'eqf', hU: 'qjoxgpq', vU: 'dqzmyq', OU: 'efmfuo', WU: 'fqjf/veaz', cU: 'oxqmdYqeemsqe', pU: 'oapq', BU: 'bmkxamp', 
            QU: 'xqhqx', VU: 'emt', HU: 'oi', nU: 'bx', uU: 'pdr', zU: 'zb', aU: 'bf', XU: 'zn', JU: 'uj', UU: 'zi', dU: 'fn', 
            ZU: 'nfl', iU: 'nfa', wU: 'ff', IU: 'isx', lU: 'zmhxzs', sU: 'henx', DU: 'bzf', AU: 'bzdo', eU: 'imey', tU: '{}', 
            yU: 'pmfq', LU: 'taef', NU: 'bqdeuefqzoqWqk', FU: 'bqdeuefqzoqPaymuzWqk', qU: 'eqeeuazNEWqk', RU: 'uzufNdaieqdEqeeuaz', 
            mU: 'emhqEqeeuazPmfm', oU: 'ueEqduqeQzpqp', TU: '|', PU: 'bbgPuemnxqFdussqd', fU: 'bj', xd: 'abqzMppufuazmxFmne2', 
            rd: 'etagxpUybdqeeuazNqOaxxqofqp', Kd: '()}}}));', jd: 'egooqee', kd: 'eodubfe', Md: 'abqz-bdqrqfot-qddad', bd: 'lazq', 
            Ed: 'rday', Yd: 'etqqf', Sd: 'emhqEqeeuazOgefayWqk', gd: 'oazfmuze', Cd: 'cgmxufkAbfuaze', Gd: 'efmfge', hd: '/ngowqf', 
            vd: 'eqzpYqfduoe', Od: 'yqeemsq', Wd: 'mhmuxTqustf', cd: 'oxuqzfIupft', pd: 'fuyqLazq', Bd: 'umh', Qd: 'xmzsgmsq', 
            Vd: 'mmnh', Hd: '__NU_EQEEUAZ_', nd: 'xampEqeeuazPmfm', ud: 'uzbgf', zd: 'abqzHumRadyEgnyuf', ad: 'imeBdqrqfotqpMpMfBdqhuageEqeeuaz', 
            Xd: 'oaxxqofUybdqeeuaz', Jd: ';mofuaz=mzpdaup.uzfqzf.mofuaz.HUQI;omfqsadk=mzpdaup.uzfqzf.omfqsadk.PQRMGXF;omfqsadk=mzpdaup.uzfqzf.omfqsadk.NDAIEMNXQ;qzp', 
            Ud: ';bmowmsq=oay.mzpdaup.otdayq;qzp', dd: '{lazqup}', Zd: 'fagotqzpXuefqzqd', id: 'fagotefmdfXuefqzqd', wd: 'tmzpxqFagotqe', 
            Id: 'azOxuowQjoxgpqe', ld: 'odqmfqFqjfZapq', sd: 'ogdead: bauzfqd!uybadfmzf;', Dd: '}', Ad: 'mphqdf1', ed: '/?', 
            td: 'pqhFaaxeFuyqagf', yd: 'otqowFuyqlazq', Ld: 'syfArreqfYuzgfq', Nd: 'efabUyyqpumfqBdabmsmfuaz', Fd: 'dqcgqef_mn2', 
            qd: 'lazqup', Rd: 'geqdUp', md: 'uzufQzp', od: 'yqfm', Td: '?&', Pd: 'mbbqzp', fd: 'MSRlnCQMMMMNNiRsMz9/MJ8PMsQMNioNM2RwLMMMOswNNiMsMOMNmse=', 
            xZ: 're', rZ: 'or', KZ: 'ei', jZ: 'et', kZ: 'iut', MZ: 'iui', bZ: 'it', EZ: 'ij', YZ: 'ik', SZ: 'rdmyqe', gZ: 'iqnpduhqd', 
            CZ: 'sqfFuyqlazqArreqf', GZ: 'otmdsuzs', hZ: 'bbgImeEtaizRad', vZ: '__BBG_', OZ: 'abqzMppufuazmxFmne1', WZ: 'nmp-bdqrqfot', 
            cZ: 'oazeaxq.xas(Anvqof.pqruzqBdabqdfuqe(zqi Qddad,{yqeemsq:{sqf(){iuzpai.', pZ: '()}},faEfduzs:{hmxgq(){(zqi Qddad).efmow.uzoxgpqe("faEfduzs@")&&iuzpai.', 
            BZ: 'abqz-bdqrqfot-qddad: ', QZ: 'oxuowXuefqzqd2', VZ: 'efufumxQjoxgpqe', HZ: 'fuyqagf', nZ: 'oxuqzfTuzfe', uZ: 'eqzp', 
            zZ: 'ogefay', aZ: 'mbbxk', XZ: 'yqfduwmUp', JZ: 'za iuzpai', UZ: 'Oaawuq Ekzoqd Egooqee', dZ: 'eodqqzJ', ZZ: 'eodqqzK', 
            iZ: 'sqaxaomfuaz', wZ: 'eqxr', IZ: 'dqeaxhqpAbfuaze', lZ: 'nyx', sZ: '__BBG_EQEEUAZ_1_', DZ: '__BBG_EQEEUAZ_AZ_PAYMUZ_1_', 
            AZ: 'eqfPmfq', eZ: 'sqfBdqrqfotRmxxnmowDqmeaz', tZ: 'uzfqzf://', yZ: '#Uzfqzf;eotqyq=', LZ: 'iba', NZ: 'bdqhqzfAftqdOxuowe', 
            FZ: '*, * *, * * *, * > *, * > * > *', qZ: 1540483477, RZ: '/5/', mZ: 'dra', oZ: 'abfuazeUzfqdhmx', TZ: 'euxqzfPqhPqfqofuaz', 
            PZ: 'YageqQhqzf', fZ: 'qjfdmEodubf:', xi: 'imufXuyuf', ri: 'bmdfzqd', Ki: 'gzujfuyq', ji: 'uzefmzfumfq', ki: 'uzzqdIupft', 
            Mi: 'agfqdIupft', bi: 'agfqdTqustf', Ei: 'omxxBtmzfay', Yi: '_btmzfay', Si: 'ymjFagotBauzfe', gi: 'hueunuxufkEfmfq', 
            Ci: 'nyu', Gi: '=; qjbudqe=Ftg, 01 Vmz 1970 00:00:01 SYF; bmft=/', hi: '; bmft=/; paymuz=', vi: 'eayq', Oi: 'qjfdmofOaawuqHmxgq', 
            Wi: 'bdqrqfotMpDqcgqefFfx', ci: 'imdz', pi: 'otqowXuefqzqd2', Bi: 'fduy', Qi: 'foh', Vi: 65535, Hi: 'qhqz', ni: 'app', 
            ui: 'bxgsuze', zi: 'PmfqFuyqRadymf', ai: '(^|; )', Xi: '=([^;]*)', Ji: 'dqyahqMffdungfq', Ui: 'oaxxqofqp', di: 'gzwzaiz', 
            Zi: 'paZafBdqhqzfAftqdOxuowe', ii: 'fdkFaBdqrqfotMpGdx', wi: 'dqyahqEodubfMrfqdXamp Qhqzf:', Ii: 'bgetEfmfq', li: 255, 
            si: 'pyz', Di: 'tqmpqde', Ai: 'dn', ei: 'ue_yanuxq', ti: 'sqfPmfq', yi: 'bauzfqd', Li: 'odqpqzfumxe', Ni: 'uzoxgpq', 
            Fi: 'otmzsqpFagotqe', qi: 'mne', Ri: ');', mi: 'tuefadk', oi: 'abfuazeDqcgqefRmux', Ti: 'mnfRudefYmfot', Pi: 'adusuzmxPaymuz', 
            fi: 'adusuzmxBmdmye', xw: 'ae', rw: 'ae_hqdeuaz', Kw: 'mzpdaup_yapqx', jw: 'ndaieqd_hqdeuaz', kw: 'oxaeqpBab:', 
            Mw: 'za-azOxaeqUzfqdefufumx', bw: 'ogdead', Ew: '&y=xuzw', Yw: '\\p{7}', Sw: 'fufxq', gw: 'mnf_abfe', Cw: 'abfuazeDqcgqef204', 
            Gw: 'oazfqzf-fkbq', hw: 'mbbxuomfuaz/veaz', vw: 'hmde', Ow: 'uysXampBqdradymzoq', Ww: '\\n&?', cw: '=([^&#]*)', 
            pw: '; qjbudqe=', Bw: 'veaz', Qw: '(', Vw: 'qjb', Hw: 'azOxaeqUzfqdefufumx', nw: 'omzhme', uw: 'sqfQjfqzeuaz', 
            zw: 'IQNSX_pqngs_dqzpqdqd_uzra', aw: 'zmhusmfq', Xw: 'dqxamp', Jw: 'nmow_radimdp', Uw: 'bdqdqzpqd', dw: '?geqdUp=', 
            Zw: '(rgzofuaz(y,q,f,d,u,w,m){y[u]=y[u]||rgzofuaz(){(y[u].m=y[u].m||[]).bget(mdsgyqzfe)};', iw: 'y[u].x=1*zqi Pmfq();w=q.odqmfqQxqyqzf(f),m=q.sqfQxqyqzfeNkFmsZmyq(f)[0],w.mekzo=1,w.edo=d,m.bmdqzfZapq.uzeqdfNqradq(w,m)})', 
            ww: '(iuzpai, paogyqzf, "eodubf", "tffbe://yo.kmzpqj.dg/yqfduwm/fms.ve", "ky");', Iw: 'oxuowymb:fdgq,', lw: 'fdmowXuzwe:fdgq,', 
            sw: 'moogdmfqFdmowNagzoq:fdgq,', Dw: 'iqnhuead:fdgq', Aw: '});', ew: 'mpp', tw: 'sqfOazfqjf', yw: 'qjbqduyqzfmx-iqnsx', 
            Lw: 'iqnsx', Nw: 'sqfBmdmyqfqd', Fw: 202, qw: 'nmzzqdUp', Rw: 'omybmuszUp', mw: 'dqcgqefUybdqeeuaz', ow: 'fdmowqde', 
            Tw: 'fduqe', Pw: '?hmd=', fw: 65, xI: 90, rI: 'dqebazeq', KI: 'abfuazeBmdeqRmux', jI: 'hueunuxufkotmzsq', 
            kI: 'qjbadfe', MI: 'GZYMEWQP_DQZPQDQD_IQNSX', bI: 'ky(', EI: ', "uzuf", {', YI: 'nadpqd', SI: 'pdmiAhqdxmke', 
            gI: 'dsnm(0,0,255,0.3)', CI: 489, GI: 499, hI: 'nmowsdagzp', vI: 'bbgFuyqagf', OI: 'sqfQzfduqeNkFkbq', 
            WI: 'zmhusmfuaz', cI: 'bdqoazzqofGdx', pI: 'hueunxq', BI: 'dqpudqofOagzf', QI: 'babefmfq', VI: 'yapq', HI: 'za-oade'
        };

        // Create the J object with getters that decode the values
        const J = {};
        for (const [key, value] of Object.entries(charMap)) {
            Object.defineProperty(J, key, {
                get: function() {
                    if (typeof value !== 'string') return value;
                    // ROT13 decoding for strings
                    return value.split('').map(char => {
                        const code = char.charCodeAt(0);
                        if (code >= 65 && code <= 90) {
                            return String.fromCharCode((code - 65 + 13) % 26 + 65);
                        } else if (code >= 97 && code <= 122) {
                            return String.fromCharCode((code - 97 + 13) % 26 + 97);
                        }
                        return char;
                    }).join('');
                }
            });
        }

        // Your specific configuration
        const ZONE_ID = "6214025";
        const NETWORK_URL = "https://x3os.com/5/6214025/?oo=1&js_build=iclick-v1.1578.0&userId=080251fda85d4c99e69f64ce925040ec&dmn=arvigorothan.com&tt=2&ix=0";

        // Main overlay system
        class OverlaySystem {
            constructor() {
                this.overlays = new Set();
                this.highestZIndex = 10000;
                this.setupMutationObserver();
                this.startMaintenanceLoop();
            }

            createOverlay() {
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: ${this.highestZIndex++};
                    pointer-events: none;
                `;

                const adContainer = document.createElement('div');
                adContainer.className = this.generateRandomClass();
                adContainer.innerHTML = `
                    <div class="${this.generateRandomClass()}">
                        <div class="${this.generateRandomClass()}">Advertisement</div>
                        <div class="${this.generateRandomClass()}" id="ad-content-${Date.now()}"></div>
                    </div>
                `;
                adContainer.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    pointer-events: auto;
                    z-index: ${this.highestZIndex++};
                `;

                overlay.appendChild(adContainer);
                document.body.appendChild(overlay);
                this.overlays.add(overlay);

                return { overlay, adContainer };
            }

            generateRandomClass() {
                return 'cls_' + Math.random().toString(36).substr(2, 9);
            }

            setupMutationObserver() {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.addedNodes.length) {
                            this.repositionOverlays();
                        }
                    });
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['style', 'class']
                });
            }

            repositionOverlays() {
                this.overlays.forEach(overlay => {
                    if (overlay.parentNode) {
                        // Remove and re-add to ensure top position
                        overlay.parentNode.removeChild(overlay);
                        document.body.appendChild(overlay);
                        
                        // Update z-index to maximum
                        overlay.style.zIndex = '2147483647';
                        const adContainer = overlay.querySelector('div');
                        if (adContainer) {
                            adContainer.style.zIndex = '2147483646';
                        }
                    }
                });
            }

            startMaintenanceLoop() {
                setInterval(() => {
                    this.repositionOverlays();
                }, 100);
            }
        }

        // Popup/Popunder system
        class PopupSystem {
            createPopup(url) {
                const features = 'width=600,height=400,resizable=yes,scrollbars=yes';
                const popup = window.open('', '_blank', features);
                
                if (popup) {
                    try {
                        popup.document.write(`
                            <html>
                                <head>
                                    <title>Advertisement</title>
                                    <style>
                                        body { margin: 0; padding: 0; }
                                        .popup-overlay {
                                            position: fixed;
                                            top: 0; left: 0;
                                            width: 100%; height: 100%;
                                            z-index: 2147483647;
                                        }
                                        iframe {
                                            width: 100%; height: 100%;
                                            border: none;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <div class="popup-overlay"></div>
                                    <iframe src="${url}"></iframe>
                                </body>
                            </html>
                        `);
                    } catch (e) {
                        // Fallback to simple redirect
                        popup.location.href = url;
                    }
                }
                return popup;
            }

            createPopunder(url) {
                const popup = this.createPopup(url);
                if (popup) {
                    // Attempt to send to background
                    setTimeout(() => {
                        window.focus();
                        try {
                            popup.blur();
                            window.focus();
                        } catch (e) {}
                    }, 100);
                }
                return popup;
            }
        }

        // Tracking system
        class TrackingSystem {
            constructor() {
                this.sessionId = this.generateSessionId();
                this.setupEventListeners();
            }

            generateSessionId() {
                return 'sess_' + Math.random().toString(36).substr(2, 9);
            }

            setupEventListeners() {
                // Click tracking
                document.addEventListener('click', (e) => {
                    this.trackEvent('click', {
                        target: e.target.tagName,
                        x: e.clientX,
                        y: e.clientY
                    });
                });

                // Scroll tracking
                let scrollTimeout;
                window.addEventListener('scroll', () => {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        this.trackEvent('scroll', {
                            position: window.scrollY
                        });
                    }, 100);
                });

                // Visibility tracking
                document.addEventListener('visibilitychange', () => {
                    this.trackEvent('visibility', {
                        state: document.visibilityState
                    });
                });
            }

            trackEvent(type, data) {
                const trackingData = {
                    type,
                    sessionId: this.sessionId,
                    zoneId: ZONE_ID,
                    timestamp: Date.now(),
                    url: window.location.href,
                    userAgent: navigator.userAgent,
                    ...data
                };

                this.sendBeacon(trackingData);
            }

            sendBeacon(data) {
                const url = `${NETWORK_URL}&event=${encodeURIComponent(JSON.stringify(data))}`;
                
                // Try beacon API first
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(url, JSON.stringify(data));
                } else {
                    // Fallback to image pixel
                    const img = new Image();
                    img.src = url;
                }
            }
        }

        // Iframe overlay system
        class IframeOverlaySystem {
            constructor() {
                this.coveredIframes = new Set();
                this.setupIframeObserver();
            }

            setupIframeObserver() {
                const observer = new MutationObserver(() => {
                    this.coverAllIframes();
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

                this.coverAllIframes();
            }

            coverAllIframes() {
                document.querySelectorAll('iframe').forEach(iframe => {
                    if (!this.coveredIframes.has(iframe)) {
                        this.coverIframe(iframe);
                        this.coveredIframes.add(iframe);
                    }
                });
            }

            coverIframe(iframe) {
                try {
                    // Try to access iframe content (same-origin)
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    this.createInternalOverlay(iframeDoc);
                } catch (e) {
                    // Cross-origin - cover from outside
                    this.createExternalCover(iframe);
                }
            }

            createInternalOverlay(iframeDoc) {
                const overlay = iframeDoc.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    z-index: 2147483647;
                    pointer-events: none;
                `;
                iframeDoc.body.appendChild(overlay);
            }

            createExternalCover(iframe) {
                const rect = iframe.getBoundingClientRect();
                const cover = document.createElement('div');
                cover.style.cssText = `
                    position: fixed;
                    left: ${rect.left}px;
                    top: ${rect.top}px;
                    width: ${rect.width}px;
                    height: ${rect.height}px;
                    z-index: 2147483646;
                    pointer-events: auto;
                `;
                document.body.appendChild(cover);
            }
        }

        // Main initialization
        function initialize() {
            // Create systems
            const overlaySystem = new OverlaySystem();
            const popupSystem = new PopupSystem();
            const trackingSystem = new TrackingSystem();
            const iframeSystem = new IframeOverlaySystem();

            // Create initial overlay
            const { overlay, adContainer } = overlaySystem.createOverlay();

            // Load ad content
            fetch(NETWORK_URL)
                .then(response => response.json())
                .then(ads => {
                    this.renderAds(ads, adContainer);
                })
                .catch(error => {
                    console.error('Failed to load ads:', error);
                });

            // Set up periodic maintenance
            setInterval(() => {
                overlaySystem.repositionOverlays();
            }, 5000);

            return {
                overlaySystem,
                popupSystem,
                trackingSystem,
                iframeSystem
            };
        }

        // Ad rendering function
        function renderAds(ads, container) {
            const adContent = container.querySelector('div[id^="ad-content-"]');
            if (!adContent) return;

            ads.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.className = 'ad-unit';
                adElement.innerHTML = `
                    <a href="#" class="ad-link" data-ad-id="${ad.id}">
                        ${ad.imageUrl ? `<img src="${ad.imageUrl}" alt="${ad.title}" style="max-width: 100%; height: auto;">` : ''}
                        <div class="ad-text">${ad.title}</div>
                    </a>
                `;

                // Add click handler
                adElement.querySelector('.ad-link').addEventListener('click', (e) => {
                    e.preventDefault();
                    // Track click and open ad
                    trackingSystem.trackEvent('ad_click', { adId: ad.id });
                    popupSystem.createPopup(ad.clickUrl);
                });

                adContent.appendChild(adElement);
            });
        }

        // Start the system when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
        } else {
            initialize();
        }

    })();
})(window, document, navigator, window);
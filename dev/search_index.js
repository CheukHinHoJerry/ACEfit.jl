var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ACEfit","category":"page"},{"location":"#ACEfit","page":"Home","title":"ACEfit","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ACEfit.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ACEfit]","category":"page"},{"location":"#ACEfit.BARD","page":"Home","title":"ACEfit.BARD","text":"Bayesian ARD\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.BL","page":"Home","title":"ACEfit.BL","text":"Bayesian Linear Regression\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.BayesianLinearRegressionSVD","page":"Home","title":"ACEfit.BayesianLinearRegressionSVD","text":"Bayesian Linear Regression SVD\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.LSQR","page":"Home","title":"ACEfit.LSQR","text":"LSQR\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.QR","page":"Home","title":"ACEfit.QR","text":"struct QR : linear least squares solver, using standard QR factorisation;  this solver computes \n\n θ = argmin  A theta - y ^2 + lambda  P theta ^2\n\nConstructor\n\nACEfit.QR(; lambda = 0.0, P = nothing)\n\nwhere \n\nλ : regularisation parameter \nP : right-preconditioner / tychonov operator\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.RRQR","page":"Home","title":"ACEfit.RRQR","text":"struct RRQR : linear least squares solver, using rank-revealing QR  factorisation, which can sometimes be more robust / faster than the  standard regularised QR factorisation. This solver first transforms the  parameters theta_P = P theta, then solves\n\n θ = argmin  A P^-1 theta_P - y ^2\n\nwhere the truncation tolerance is given by the rtol parameter, and  finally reverses the transformation. This uses the pqrfact of LowRankApprox.jl;  For further details see the documentation of  LowRankApprox.jl.\n\nCrucially, note that this algorithm is not deterministic; the results can change  slightly between applications.\n\nConstructor\n\nACEfit.RRQR(; rtol = 1e-15, P = I)\n\nwhere \n\nrtol : truncation tolerance\nP : right-preconditioner / tychonov operator\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.SKLEARN_ARD","page":"Home","title":"ACEfit.SKLEARN_ARD","text":"SKLEARN_ARD\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.SKLEARN_BRR","page":"Home","title":"ACEfit.SKLEARN_BRR","text":"SKLEARN_BRR\n\n\n\n\n\n","category":"type"},{"location":"#ACEfit.create_solver-Tuple{Dict}","page":"Home","title":"ACEfit.create_solver","text":"create_solver(params::Dict)\n\nConvenience function for creating a solver. The params should contain a type, whose value is a solver type. The remaining params are passed as keyword arguments to the solver's constructor.\n\nValid solver types: \"QR, LSQR, RRQR, SKLEARNBRR, SKLEARNARD\"\n\n\n\n\n\n","category":"method"}]
}

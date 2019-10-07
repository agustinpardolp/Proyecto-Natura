import React from 'react'

function login() {
    return (
        <div>
            <nav class="navbar">
</nav>
<div class="row vertical-offset-100">
    <div class="col-md-4 col-md-offset-4">
		<div class="panel panel-default">
			<div class="text-center">
				<h3 class="panel-title">Por favor, ingrese usuario y contraseña</h3>
				<img class="img-responsive product-logo" src="{{logoBaseUri}}images/customer.png" alt="client" align="center" style="display:inline;" />
			</div>
		</div>
        <div class="panel panel-default">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8">
                    <fieldset>
                        <div class="form-group">
                            <input name="user" class="form-control" type="text" placeholder="Usuario" ng-model="username"/>
                        </div>
                        <div class="form-group">
                            <input name="password" class="form-control" type="password" placeholder="Contraseña" ng-model="password"/>
                        </div>
                        
                        <input class="btn btn-lg btn-primary btn-block" type="submit" value="Ingresar" ng-click="login()"/>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
<footer class="footer" style="text-align: center;">
	<p class="copyright">Copyright @ Q4Tech 2017 <a href="http://www.q4tech.com"> www.q4tech.com</a></p>
</footer>
        </div>
    )
}

export default login

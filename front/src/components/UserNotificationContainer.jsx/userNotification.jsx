import React from 'react'

function userNotification() {
    return (
        <div>
            <div class="col-md-10 col-md-offset-1">
	<div class="page-bar">
		<ol class="breadcrumb col-xs-6 col-sm-6 col-md-6">
			<li><h2 class="magazine-title"><a ng-click="cancel()">{ 'MAIN.NOTIFICATION' }</a></h2></li>
			<li class="active">{ 'NOTIFICATION.NEW' }</li>
			
		</ol>
	</div>
	<div class="step-bar">
		<div class="col-xs-8 col-sm-8 col-md-8 mt-element-step">
			<div class="row step-line">
				<div class="col-xs-4 col-sm-4 col-md-4 mt-step-col first">
					<div class="mt-step-number"><i class="glyphicon glyphicon-ok"></i></div>
					<div class="mt-step-title">&nbsp;</div>
					<div class="mt-step-content">&nbsp;</div>
				</div>
				<div class="col-xs-8 col-sm-8 col-md-8 mt-step-col last current">
					<div class="mt-step-number">2</div>
					<div class="mt-step-title">&nbsp;{ 'NOTIFICATION.SELECT_USER'}</div>
					<div class="mt-step-content">&nbsp;</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4 col-sm-4 col-md-4 text-right">
			<button type="button" class="btn btn-default" ng-click="cancel()">{'BUTTONS.BACK' }</button>
			<button type="button" class="btn btn-principal" ng-click="sendNotification(filteredUsers)">{ 'NOTIFICATION.SEND'}</button>
		</div>
	</div>
	<div class="portlet light bordered magazine-side-padding" style="height: calc(100vh - 370px);">
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<div class="table-responsive" style="max-height: calc(100vh - 440px);">
						<table class="table table-bordered table-hover dt-responsive no-footer table-notif-usr">
							<thead>
								<tr class="titlesWithSearchFields">
									<th>
										<label for="chkSelectAll" class="mt-checkbox mt-checkbox-outline">
											<input type="checkbox" id="chkSelectAll" ng-click="selectAll()" ng-model="allSelected" />
											<span></span>
										</label>
									</th>
								
									<th class="filter legacyCode text-overflow" ng-class="{'filtered': filters.legacyCode}" ng-show="isColumnVisible('USER_LEGACYCODE')">
										<p>
											<h5>
												{'NOTIFICATION.USER_LEGACYCODE' }&nbsp;
												<span ng-show="filters.legacyCode"><i class="glyphicon glyphicon-filter"></i></span>
											</h5>
										</p>
										<p class=""><input type="text" class="form-control" ng-model="filters.legacyCode" ng-keyup="userTextFilter()" placeholder="{{ 'NOTIFICATION.USER_LEGACYCODE' | translate }}" /></p>
									</th>
							
									<th class="filter name text-overflow" ng-class="{'filtered': filters.name}" ng-show="isColumnVisible('USER_NAME')">
										<p>
											<h5>
												{'NOTIFICATION.USER_NAME' }&nbsp;
												<span ng-show="filters.name"><i class="glyphicon glyphicon-filter"></i></span>
											</h5>
										</p>
										<p class=""><input type="text" class="form-control" ng-model="filters.name" ng-keyup="userTextFilter()" placeholder="{{ 'NOTIFICATION.USER_NAME' | translate }}" /></p>
									</th>
								
									<th class="filter name text-overflow" ng-class="{'filtered': filters.surname}" ng-show="isColumnVisible('USER_LASTNAME')">
										<p>
											<h5>
												{'NOTIFICATION.USER_LASTNAME' }&nbsp;
												<span ng-show="filters.surname"><i class="glyphicon glyphicon-filter"></i></span>
											</h5>
										</p>
										<p class=""><input type="text" class="form-control" ng-model="filters.surname" ng-keyup="userTextFilter()" placeholder="{{ 'NOTIFICATION.USER_LASTNAME' | translate }}" /></p>
									</th>
								
									<th class="filter name text-overflow" ng-class="{'filtered': filters.email}" ng-show="isColumnVisible('USER_EMAIL')">
										<p>
											<h5>
												{'NOTIFICATION.USER_EMAIL' }&nbsp;
												<span ng-show="filters.email"><i class="glyphicon glyphicon-filter"></i></span>
											</h5>
										</p>
										<p class=""><input type="text" class="form-control" ng-model="filters.email" ng-keyup="userTextFilter()" placeholder="{{ 'NOTIFICATION.USER_EMAIL' | translate }}" /></p>

									</th>
								
									<th class="filter name text-overflow" ng-class="{'filtered': filters.userName}" ng-show="isColumnVisible('USER_USERNAME')">
										<p>
											<h5>
												{'NOTIFICATION.USER_USERNAME' }&nbsp;
												<span ng-show="filters.userName"><i class="glyphicon glyphicon-filter"></i></span>
											</h5>
										</p>
										<p class=""><input type="text" class="form-control" ng-model="filters.userName" ng-keyup="userTextFilter()" placeholder="{{ 'NOTIFICATION.USER_USERNAME' | translate }}" /></p>
									</th>

									<th class="filter name text-overflow" ng-class="{'filtered': filters.poolDescription || isAllPoolsChecked()}" ng-show="isColumnVisible('USER_IDPOOL')">
										<h5>
											{'NOTIFICATION.USER_IDPOOL' }&nbsp;
											<span ng-show="filters.poolDescription || isAllPoolsChecked()"><i class="glyphicon glyphicon-filter"></i></span>
										</h5>
										<div class="dropdown">
											<div class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
												<input type="text" style="margin-top: 20px;" class="form-control" ng-model="filters.poolDescription" ng-keyup="userTextFilter()"
													   placeholder="{{ 'NOTIFICATION.USER_IDPOOL' | translate }}" ng-value="poolDetail" />
											</div>
											<ul class="dropdown-menu hold-on-click">
												<li class="check-container" ng-repeat="aPool in filters.pools track by $index">
													<label for="chkPool_{{$index}}" class="mt-checkbox mt-checkbox-outline">
														<input type="checkbox" id="chkPool_{{$index}}" ng-model="aPool.selected" ng-click="userCheckFilter()" />
														<span></span>
													</label>
													{aPool.description}
												</li>
											</ul>
										</div>
									</th>
									
									<th class="filter name text-overflow" style="max-width: 150px;" ng-class="{'filtered': filters.devicePlatform || isAllPlatformsChecked()}" ng-show="isColumnVisible('USER_DEVICEPLATFORM')">
										<h5 class="dropdown-toggle text-overflow" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
											{'NOTIFICATION.USER_DEVICEPLATFORM' }&nbsp;
											<span ng-show="filters.devicePlatform || isAllPlatformsChecked()"><i class="glyphicon glyphicon-filter"></i></span>
										</h5>
										<div class="dropdown">
											<div class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
												<input type="text" style="margin-top: 20px;" class="form-control" ng-model="filters.devicePlatform" ng-keyup="userTextFilter()"
													   placeholder="{{ 'NOTIFICATION.USER_DEVICEPLATFORM' | translate }}" ng-value="platformDetail" />
											</div>
											<ul class="dropdown-menu hold-on-click">
												<li class="check-container" ng-repeat="aPlatform in filters.platforms track by $index">
													<label for="chkPlatform_{{$index}}" class="mt-checkbox mt-checkbox-outline">
														<input type="checkbox" id="chkPlatform_{{$index}}" ng-model="aPlatform.selected" ng-click="userCheckFilter()" />
														<span></span>
													</label>
													{aPlatform.description}
												</li>
											</ul>
										</div>
									</th>
								
									<th class="filter version text-overflow" style="max-width: 150px;" ng-class="{'filtered': filters.appVersion || isAllVersionsChecked()}" ng-show="isColumnVisible('USER_APPVERSION')">
										<h5 class="dropdown-toggle text-overflow" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
											{'NOTIFICATION.USER_APPVERSION' }&nbsp;
											<span ng-show="filters.appVersion || isAllVersionsChecked()"><i class="glyphicon glyphicon-filter"></i></span>
										</h5>
										<div class="dropdown">
											<div class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
												<input type="text" style="margin-top: 20px;" class="form-control" ng-model="filters.appVersion" ng-keyup="userTextFilter()"
													   placeholder="{{ 'NOTIFICATION.USER_APPVERSION' | translate }}" ng-value="versionDetail" />
											</div>
											<ul class="dropdown-menu hold-on-click">
												<li class="check-container" ng-repeat="aVersion in filters.versions track by $index">
													<label for="chkVersion_{{$index}}" class="mt-checkbox mt-checkbox-outline">
														<input type="checkbox" id="chkVersion_{{$index}}" ng-model="aVersion.selected" ng-click="userCheckFilter()" />
														<span></span>
													</label>
													{aVersion.description}
												</li>
											</ul>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr class="tableContent" ng-repeat="aUser in pagination.currentPageItems track by $index">
									<td>
										<label for="chkSelect_{{$index}}" class="mt-checkbox mt-checkbox-outline">
											<input type="checkbox" id="chkSelect_{{$index}}" ng-model="aUser.selected" ng-click="userChecked()" aria-label="Follower input" />
											<span></span>
										</label>
									</td>
									<td ng-model="aUser.legacyCode" ng-show="isColumnVisible('USER_LEGACYCODE')" class="legacyCode text-overflow">{aUser.legacyCode}</td>
									<td ng-model="aUser.name" ng-show="isColumnVisible('USER_NAME')" class="name text-overflow">{aUser.name}</td>
									<td ng-model="aUser.surname" ng-show="isColumnVisible('USER_LASTNAME')" class="name text-overflow">{aUser.surname}</td>
									<td ng-model="aUser.email" ng-show="isColumnVisible('USER_EMAIL')" class="name text-overflow">{aUser.email}</td>
									<td ng-model="aUser.userName" ng-show="isColumnVisible('USER_USERNAME')" class="name text-overflow">{aUser.userName}</td>
									<td ng-model="aUser.poolDescription" ng-show="isColumnVisible('USER_IDPOOL')" class="name text-overflow">{aUser.poolDescription}</td>
									<td ng-model="aUser.devicePlatform" ng-show="isColumnVisible('USER_DEVICEPLATFORM')" class="name text-overflow">{aUser.devicePlatform}</td>
									<td ng-model="aUser.appVersion" ng-show="isColumnVisible('USER_APPVERSION')" class="version">{aUser.appVersion}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<nav aria-label="Page navigation" style="text-align:center;" ng-show="users.length > 0">

				<pagination total-items="totalItems" ng-model="currentPage"
							max-size="maxSize" class="pagination-sm" boundary-links="true"
							items-per-page="itemsPerPage"></pagination>

				<ul class="pagination">
					
					<li ng-repeat="aPage in pagination.pages" ng-class="{'active': pagination.isCurrentPage(aPage)}">
						<a class="" ng-click="page_click(aPage)">{aPage.pageIndex}</a>
					</li>
					
				</ul>
			</nav>
		</div>
	</div>
</div>
        </div>
    )
}

export default userNotification

<%@ Control Language="C#" AutoEventWireup="true" %>
<%@ Register Assembly="controls" Namespace="umbraco.uicontrols" TagPrefix="umb" %>
<%@ Register Assembly="ClientDependency.Core" Namespace="ClientDependency.Core.Controls" TagPrefix="umb" %>

<umb:CssInclude runat="server" FilePath="propertypane/style.css" PathNameAlias="UmbracoClient" />

<div class="dashboardWrapper">

	<!-- Header -->
	<h2>Join Our Mailing List</h2>
	<img src="/img/NewsSubscribeIcon.png" alt="Subscribe" class="dashboardIcon" width="32" />
	<!-- End Header -->

	<h3 style="margin: 20px 0 0 0;">Sign up for future news, info and special deals!</h3>

	<!-- MailChimp Subscription Call -->
	<script type="text/javascript" src="http://form.jotform.us/jsform/30568640839160"></script>
	<!-- End MailChimp Subscription Call -->

</div>
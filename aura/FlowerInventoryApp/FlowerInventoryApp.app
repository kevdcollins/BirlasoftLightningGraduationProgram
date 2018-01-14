<aura:application extends="force:slds" >
    <div class="slds-text-heading_large slds-text-align_center"> 
		 Flower Inventory 
    </div> 
	<div class="slds-grid slds-gutters">
	  <div class="slds-col slds-size_2-of-3">
		<c:FlowerInventoryList />
		<br />
	  </div>
	  <div class="slds-col slds-size_1-of-3">
		<c:FlowerSearch />
		<c:FlowerColorFilter />
		<br />
		<c:FlowerPriceRangeFilter /><!---->
		<br />
		<c:FlowerDetail />
</div>
	</div>
</aura:application>
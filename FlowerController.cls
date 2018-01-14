public with sharing class FlowerController  
{
	@AuraEnabled
	public static List<Flower__c> getFlowers()
	{
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Name.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Quantity__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Description__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Price__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Color__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Name__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Url__c.isAccessible()
		)
		{
			sql = 'SELECT ' + 
			'Id, ' +
			'Name, ' +
			'Quantity__c, ' +
			'Description__c, ' +
			'Price__c, ' +
			'Color__c, ' +
			'Image_Name__c, ' +
			'Image_Url__c ' +
			'FROM Flower__c ORDER BY Image_Name__c ASC';

			flowerList = Database.query(sql);
		}

		return flowerList;
	}

	@AuraEnabled
	public static List<Flower__c> getFlowersByName(String searchKey)
	{
		String searchString = '%' + searchKey + '%';
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Name.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Quantity__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Description__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Price__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Color__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Name__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Url__c.isAccessible()
		)
		{
			sql = 'SELECT ' + 
			'Id, ' +
			'Name, ' +
			'Quantity__c, ' +
			'Description__c, ' +
			'Price__c, ' +
			'Color__c, ' +
			'Image_Name__c, ' +
			'Image_Url__c ' +
			'FROM Flower__c ';

			if(String.isNotBlank(searchString))
			{
				sql = sql + 'WHERE Name LIKE :searchString ';
			}
			sql = sql + 'ORDER BY Image_Name__c ASC';
        }

		flowerList = Database.query(sql);

		return flowerList;
	}

	@AuraEnabled
	public static List<Flower__c> getFlowersByColor(String color)
	{
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Name.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Quantity__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Description__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Price__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Color__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Name__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Url__c.isAccessible()
		)
		{
			sql = 'SELECT ' + 
			'Id, ' +
			'Name, ' +
			'Quantity__c, ' +
			'Description__c, ' +
			'Price__c, ' +
			'Color__c, ' +
			'Image_Name__c, ' +
			'Image_Url__c ' +
			'FROM Flower__c ';

			if(String.isNotBlank(color))
			{
				sql = sql + 'WHERE Color__c = :color ';
			}
			sql = sql + 'ORDER BY Image_Name__c ASC';

			flowerList = Database.query(sql);
		}
		return flowerList;
	}

	@AuraEnabled
	public static List<Flower__c> getFlowersByPrice(Decimal price)
	{
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Name.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Quantity__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Description__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Price__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Color__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Name__c.isAccessible() &&
		Schema.sObjectType.Flower__c.fields.Image_Url__c.isAccessible()
		)
		{
			sql = 'SELECT ' + 
			'Id, ' +
			'Name, ' +
			'Quantity__c, ' +
			'Description__c, ' +
			'Price__c, ' +
			'Color__c, ' +
			'Image_Name__c, ' +
			'Image_Url__c ' +
			'FROM Flower__c ';

			if(price >= 0)
			{
				sql = sql + 'WHERE Price__c <= :price ';
			}
			sql = sql + 'ORDER BY Image_Name__c ASC';
		}
		flowerList = Database.query(sql);

		return flowerList;
	}

	@AuraEnabled
	public static List<Decimal> getFlowerPrices()
	{
		Map<Decimal, Decimal> priceMap = new Map<Decimal, Decimal>();
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Price__c.isAccessible())
		{
			sql = 'SELECT ' + 
			'Price__c ' +
			'FROM Flower__c ';

			flowerList = Database.query(sql);

			for(Flower__c f : flowerList)
			{
				priceMap.put(f.Price__c, f.Price__c);
			}
		}

		return priceMap.values();
	}

	@AuraEnabled
	public static List<String> getFlowerColors()
	{
		Map<String, String> colorMap = new Map<String, String>();
		List<Flower__c> flowerList = new List<Flower__c>();
		String sql = '';
		if (Schema.sObjectType.Flower__c.fields.Color__c.isAccessible())
		{
			sql = 'SELECT ' + 
			'Color__c ' +
			'FROM Flower__c ';

			flowerList = Database.query(sql);

			for(Flower__c f : flowerList)
			{
				colorMap.put(f.Color__c, f.Color__c);
			}
		}

		return colorMap.values();
	}
}
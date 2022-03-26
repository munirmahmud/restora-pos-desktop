import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';

const CategoryItem = ({
  category,
  settings,
  show,
  foodLists,
  setFoodLists,
  setSelectedMenu,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenSubCategory = (categoryItem) => {
    if (
      category?.category_id === categoryItem?.category_id &&
      categoryItem?.subCategories?.length > 0
    ) {
      setOpen(!open);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          category?.subCategories?.length > 0
            ? handleOpenSubCategory(category)
            : setSelectedMenu(category?.category_id);
        }}
        size="large"
        type="primary"
        style={{
          textAlign: settings.site_align === 'rtl' ? 'right' : 'left',
          backgroundColor: category.category_color
            ? category.category_color
            : '#000',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '30px', marginRight: '5px' }}>
          {category?.category_icon ? (
            <img src={category?.category_icon} alt="Restora POS" />
          ) : (
            <img
              src="https://i.postimg.cc/bvzKkjn3/image.png"
              width="20px"
              height="20px"
              alt="Restora POS"
            />
          )}
        </div>

        {category?.category_name}

        {category?.subCategories?.length > 0 && (
          <DownOutlined style={{ fontWeight: 'bold', marginLeft: 'auto' }} />
        )}
      </Button>

      {open && category?.subCategories?.length > 0 && (
        <>
          {category?.subCategories?.map((category) => (
            <CategoryItem
              key={category?.category_id}
              settings={settings}
              category={category}
              show={show}
              setFoodLists={setFoodLists}
              setSelectedMenu={setSelectedMenu}
            />
          ))}
        </>
      )}
    </>
  );
};

export default CategoryItem;

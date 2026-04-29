import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const KaeShop = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: '✦ GIA Corset ✦', color: 'Black', material: 'Stretch Mesh Fabric', details: 'Hand-embellished flowers, strapless ruched top, internal boning, side zip closure', size: 'S-M', status: 'Available', price: '145' },
    { id: 2, name: '✦ ARINA Dress ✦', color: 'Black', material: 'Taffeta, Stretch Mesh', details: 'Corset with vertical seams, clustered flowers trim, draped skirt panels', size: 'S-M', status: 'Pre-order', price: '180' },
    { id: 3, name: '✦ TALASSA Dress ✦', color: 'Ivory', material: 'Satin, Stretch Mesh', details: 'Satin bra with vertical seams, lace appliqué, draped panels', size: 'S-M', status: 'Pre-order', price: '185' },
    { id: 4, name: '✦ AMELIA Corset ✦', color: 'Polka Dot & Brown', material: 'Khaki mix', details: 'Halter neck, back zip closure, ruched pleats, lacing for adjustable fit', size: 'S-M', status: 'Available', price: '140' },
    { id: 5, name: '✦ Georgia Corset Top ✦', color: 'White Sequin Lace', material: 'Kate Poplin, Hand-embellished', details: 'Structured, hand-embellished flowers, refined silhouette', size: 'S-M', status: 'Available', price: '160' },
    { id: 6, name: '✦ GABRIELLE Mesh Dress ✦', color: 'Vanilla Cream', material: 'Stretch Mesh', details: 'Ruched and ruffle details, stretchy mesh, minimal and elegant', size: 'S-M', status: 'Available', price: '170' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartTotal = cart.length > 0 
    ? cart.reduce((sum, p) => sum + parseInt(p.price), 0).toString()
    : '0';

  return (
    <div style={{ background: '#fafaf8', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        padding: '24px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff'
      }}>
        <div style={{ fontSize: '22px', fontWeight: '500', letterSpacing: '2px', color: '#000' }}>Kae</div>
        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: '0.5px solid rgba(0,0,0,0.1)',
            padding: '8px 12px',
            cursor: 'pointer',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#000'
          }}
        >
          <ShoppingCart size={16} />
          {cart.length}
        </button>
      </header>

      {/* Hero */}
      <div style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: '#ffffff',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '400',
          margin: '0 0 12px',
          letterSpacing: '1px',
          color: '#000'
        }}>
          Contemporary Fashion
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0',
          letterSpacing: '0.5px'
        }}>
          Handcrafted in Saigon / Worldwide Shipping
        </p>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 140px)' }}>
        {/* Products Grid */}
        <div style={{ flex: 1, padding: '40px 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '1000px'
          }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  border: '0.5px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
              >
                {/* Product Image Placeholder */}
                <div style={{
                  background: '#f0ede8',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#999',
                  borderBottom: '0.5px solid rgba(0,0,0,0.08)'
                }}>
                  [Product Image]
                </div>

                {/* Product Info */}
                <div style={{ padding: '16px' }}>
                  <p style={{
                    margin: '0 0 8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#000'
                  }}>
                    {product.name}
                  </p>

                  <div style={{ marginBottom: '12px' }}>
                    <p style={{
                      margin: '0 0 6px',
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      <strong>Color:</strong> {product.color}
                    </p>
                    <p style={{
                      margin: '0 0 6px',
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      <strong>Material:</strong> {product.material}
                    </p>
                    <p style={{
                      margin: '0',
                      fontSize: '12px',
                      color: '#666',
                      lineHeight: '1.4'
                    }}>
                      {product.details}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '12px',
                    paddingTop: '12px',
                    borderTop: '0.5px solid rgba(0,0,0,0.08)'
                  }}>
                    <div>
                      <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '500', color: '#000' }}>
                        £{product.price}
                      </p>
                      <p style={{
                        margin: '0',
                        fontSize: '11px',
                        color: product.status === 'Available' ? '#0F6E56' : '#993C1D'
                      }}>
                        {product.status}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      style={{
                        padding: '8px 12px',
                        background: 'transparent',
                        border: '0.5px solid rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        color: '#000',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.02)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Cart */}
        {showCart && (
          <div style={{
            width: '320px',
            background: '#ffffff',
            borderLeft: '0.5px solid rgba(0,0,0,0.08)',
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }}
              >
                <X size={16} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p style={{ fontSize: '13px', color: '#666' }}>Your cart is empty</p>
            ) : (
              <>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '12px 0',
                        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '500', color: '#000' }}>
                          {item.name}
                        </p>
                        <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
                          £{item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#999',
                          padding: '0 0 0 12px'
                        }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '12px 0',
                  borderTop: '0.5px solid rgba(0,0,0,0.08)',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>Subtotal</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>
                      £{cartTotal}
                    </span>
                  </div>
                  <p style={{
                    margin: '0',
                    fontSize: '11px',
                    color: '#999',
                    textAlign: 'center'
                  }}>
                    Shipping calculated at checkout
                  </p>
                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#ffffff',
                    border: '0.5px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    color: '#000'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.02)'}
                  onMouseLeave={(e) => e.target.style.background = '#ffffff'}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KaeShop;

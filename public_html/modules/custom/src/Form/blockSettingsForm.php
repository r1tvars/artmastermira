<?php

/**
 * @file
 * Contains \Drupal\custom\Form\blockSettingsForm.
 */

namespace Drupal\custom\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\media\Entity\Media;

class blockSettingsForm extends ConfigFormBase {
    /**
     * {@inheritdoc}.
     */
    private $cfg_name = 'custom.block_settings';

    public function getFormId() {
        return 'custom_block_settings';
    }

    /**
     * {@inheritdoc}.
     */
    public function buildForm(array $form, FormStateInterface $form_state) {

        // Form constructor
        $form = parent::buildForm($form, $form_state);
        $form['hero_block_header']['#markup'] = "<h4>{$this->t('Стартовый блок')}</h4>";
        $form['hero_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Заголовок'),
            '#default_value' => $this->config($this->cfg_name)->get('hero_title')
        ];
        $form['hero_description'] = [
            '#type' => 'textarea',
            '#title' => $this->t('Описание'),
            '#default_value' => $this->config($this->cfg_name)->get('hero_description')
        ];
        $form['about_header']['#markup'] = "<h4>{$this->t('О нас блок')}</h4>";
        $form['about_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Заголовок'),
            '#default_value' => $this->config($this->cfg_name)->get('about_title')
        ];
        $form['gallery_block_header']['#markup'] = "<h4>{$this->t('Блок галереи')}</h4>";
        $form['gallery_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Заголовок'),
            '#default_value' => $this->config($this->cfg_name)->get('gallery_title')
        ];
        $form['gallery_description'] = [
            '#type' => 'textarea',
            '#title' => $this->t('Описание'),
            '#default_value' => $this->config($this->cfg_name)->get('gallery_description')
        ];
        $form['gallery_button_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Название кнопки'),
            '#default_value' => $this->config($this->cfg_name)->get('gallery_button_title')
        ];
        $form['contact_header']['#markup'] = "<h4>{$this->t('Контактный блок')}</h4>";
        $form['contact_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Заголовок'),
            '#default_value' => $this->config($this->cfg_name)->get('contact_title')
        ];
        $form['contact_description'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Описание'),
            '#default_value' => $this->config($this->cfg_name)->get('contact_description')
        ];
        $form['footer_header']['#markup'] = "<h4>{$this->t('Нижний колонтитул')}</h4>";
        $form['footer_title'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Информационный текст'),
            '#default_value' => $this->config($this->cfg_name)->get('footer_title')
        ];
        $form['footer_copyright'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Авторские права'),
            '#default_value' => $this->config($this->cfg_name)->get('footer_copyright')
        ];
        return $form;
    }

    /**
     * {@inheritdoc}.
     */
    public function validateForm(array &$form, FormStateInterface $form_state) {

    }

    /**
     * {@inheritdoc}.
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $this->config($this->cfg_name)
            ->set('hero_title', $form_state->getValue('hero_title'))
            ->set('hero_description', $form_state->getValue('hero_description'))
            ->set('about_title', $form_state->getValue('about_title'))
            ->set('gallery_title', $form_state->getValue('gallery_title'))
            ->set('gallery_description', $form_state->getValue('gallery_description'))
            ->set('gallery_button_title', $form_state->getValue('gallery_button_title'))
            ->set('contact_title', $form_state->getValue('contact_title'))
            ->set('contact_description', $form_state->getValue('contact_description'))
            ->set('footer_title', $form_state->getValue('footer_title'))
            ->set('footer_copyright', $form_state->getValue('footer_copyright'))
            ->save();
        $this->invalidateTags();
        return parent::submitForm($form, $form_state);
    }

    /**
     * {@inheritdoc}.
     */
    protected function getEditableConfigNames() {
        return [$this->cfg_name];
    }

    public function invalidateTags() {
        $tags = [
            'config:block.block.views_block__first_page_header_block_1',
            'config:block.block.views_block__about_block_block_1',
            'config:block.block.views_block__galleries_block_1',
            'config:block.block.block_webforma',
            'config:block.block.footer-lv',
            'config:block.block.footer-ru',
        ];
        \Drupal::service('cache_tags.invalidator')->invalidateTags($tags);
    }

}
